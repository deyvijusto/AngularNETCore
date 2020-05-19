import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, map, debounceTime, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RondelicaVnos } from '../rondelica.model';

@Component({
  selector: 'app-rondelica-detail',
  templateUrl: './rondelica-detail.component.html',
  styleUrls: ['./rondelica-detail.component.css']
})
export class RondelicaDetailComponent implements OnInit {

  id: number;
  ROOT_URL: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private location: Location) { }

  rondelica: any;

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      
      // this.http.get<any>(this.ROOT_URL + '/rondelicaItems/' + this.id).pipe(
      //   map(data => {
      //     console.log(data, 'data observable');

      //     this.rondelica$ = data;
      //   })).subscribe();
      // });

      this.http.get<any>(this.ROOT_URL + '/rondelicaItems/' + this.id).subscribe(x => this.rondelica = x);
    });

  }

  goBack() {
    this.location.back();
  }

}

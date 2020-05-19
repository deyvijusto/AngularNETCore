import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, map, debounceTime, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RondelicaVnos } from '../rondelica.model';
import { RondelicaItemsServiceProxy, IRondelicaItem } from 'src/app/services/api.client.generated';

@Component({
  selector: 'app-rondelica-detail',
  templateUrl: './rondelica-detail.component.html',
  styleUrls: ['./rondelica-detail.component.css']
})
export class RondelicaDetailComponent implements OnInit {

  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private rondelicaService: RondelicaItemsServiceProxy
  ) { }

  rondelica: IRondelicaItem;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.rondelicaService.getRondelicaItem(this.id).subscribe( response => this.rondelica = response);
    });
  }

  goBack() {
    this.location.back();
  }

}

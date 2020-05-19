import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RondelicaVnos } from '../rondelica.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rondelica-list',
  templateUrl: './rondelica-list.component.html',
  styleUrls: ['./rondelica-list.component.css']
})
export class RondelicaListComponent implements OnInit {

  items;
  readonly ROOT_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<RondelicaVnos>(this.ROOT_URL + '/rondelicaItems').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
   }

  ngOnInit() {
  }

  getRondelicaId (id) {
    this.router.navigate(['./rondelica/' + id]);
  }

}

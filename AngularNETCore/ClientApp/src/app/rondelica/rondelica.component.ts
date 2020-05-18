import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RondelicaVnos } from './rondelica.model';

@Component({
  selector: 'app-rondelica',
  templateUrl: './rondelica.component.html',
  styleUrls: ['./rondelica.component.css']
})
export class RondelicaComponent implements OnInit {

  rondelicaForm = new FormGroup({
    sirinaTraka: new FormControl(100),
    dolzinaTraka: new FormControl(1000),
    polmerRondelice: new FormControl(30),
    minRazdaljaMedRondelicama: new FormControl(''),
    minRazdaljaMedRondelicoInTraka: new FormControl(5),
    minRazdaljaMedRondelicoInZacetkomTraka: new FormControl(10),
  });

  get sirinaTraka() {
    return this.rondelicaForm.get('sirinaTraka');
  }
  get dolzinaTraka() {
    return this.rondelicaForm.get('dolzinaTraka');
  }
  get polmerRondelice() {
    return this.rondelicaForm.get('polmerRondelice');
  }
  get minRazdaljaMedRondelicama() {
    return this.rondelicaForm.get('minRazdaljaMedRondelicama');
  }
  get minRazdaljaMedRondelicoInTraka() {
    return this.rondelicaForm.get('minRazdaljaMedRondelicoInTraka');
  }
  get minRazdaljaMedRondelicoInZacetkomTraka() {
    return this.rondelicaForm.get('minRazdaljaMedRondelicoInZacetkomTraka');
  }

  ploscinaTrakuMM: number;
  ploscinaTrakuCM: number;
  ploscinaTrakuM: number;

  dejanskaObdelovalnaPovrsina: number;

  readonly ROOT_URL = 'http://localhost:5000/api';
  rondelicaItems: RondelicaVnos;

  constructor(private http: HttpClient) {
    this.http.get<RondelicaVnos>(this.ROOT_URL + '/rondelicaItems').subscribe(result => {
      this.rondelicaItems = result;
    }, error => console.error(error));
   }


  ngOnInit() {
    // this.http.get(this.ROOT_URL).subscribe(data => {
    //   this.items = data;
    // })
  }

  getRondelicaItems() {
    
  }

  getRondelicaItems2() {
    // this.rondelicaItems = this.http.get(this.ROOT_URL + '/rondelicaItems');
  }

  onSubmit() {
    console.log(this.rondelicaForm.value);
    this.addRondelicaItem(this.rondelicaForm.value);
  }

  addRondelicaItem(data) {
    // this.http.post( this.serverURL, data).subscribe(x => console.log(x, 'data') );
      
  }



}

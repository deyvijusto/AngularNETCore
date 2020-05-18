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
    sirinaTraku: new FormControl(100),
    dolzinaTraku: new FormControl(1000),
    polmerRondelic: new FormControl(30),
    minRazdaljaMedRondelicama: new FormControl(''),
    zgornjiInSpodnjiRob: new FormControl(5),
    zacetekInKonecRob: new FormControl(10),
  });

  get sirinaTraku() {
    return this.rondelicaForm.get('sirinaTraku');
  }
  get dolzinaTraku() {
    return this.rondelicaForm.get('dolzinaTraku');
  }
  get polmerRondelic() {
    return this.rondelicaForm.get('polmerRondelic');
  }
  get minRazdaljaMedRondelicama() {
    return this.rondelicaForm.get('minRazdaljaMedRondelicama');
  }
  get zgornjiInSpodnjiRob() {
    return this.rondelicaForm.get('zgornjiInSpodnjiRob');
  }
  get zacetekInKonecRob() {
    return this.rondelicaForm.get('zacetekInKonecRob');
  }

  ploscinaTrakuMM: number;
  ploscinaTrakuCM: number;
  ploscinaTrakuM: number;

  dejanskaObdelovalnaPovrsina: number;

  readonly ROOT_URL = 'http://localhost:5000/api';
  rondelicaItems: RondelicaVnos;
  steviloVnosov: number = 10;

  constructor(private http: HttpClient) {
    this.http.get<RondelicaVnos>(this.ROOT_URL + '/rondelicaItems').subscribe(result => {
      this.rondelicaItems = result;
    }, error => console.error(error));
   }


  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.rondelicaForm.value);
    this.addRondelicaItem(this.rondelicaForm.value);
  }

  addRondelicaItem(form) {
    const data: RondelicaVnos = {
      id: null,
      SirinaTraku: this.sirinaTraku.value,
      DolzinaTraku: this.dolzinaTraku.value,
      PolmerRondelic: this.polmerRondelic.value,
      ZgornjiInSpodnjiRob: this.zgornjiInSpodnjiRob.value,
      ZacetekInKonecRob: this.zacetekInKonecRob.value,
    }
    const data2: RondelicaVnos = form
   //  console.log(data, 'DAAAAAAAAAAAAAAAAATTATATA');
    const data3: any = {
      "sirinaTraku": 10,
      "dolzinaTraku": 20,
      "polmerRondelic": 30,
      "zgornjiInSpodnjiRob": 40,
      "zacetekInKonecRob": 8888
    }
    this.http.post( this.ROOT_URL + '/rondelicaItems', data2).subscribe(x => console.log(x, 'data') ); 
  }



}

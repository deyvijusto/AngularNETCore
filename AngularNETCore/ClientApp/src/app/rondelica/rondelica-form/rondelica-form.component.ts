import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RondelicaVnos } from '../rondelica.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rondelica-form',
  templateUrl: './rondelica-form.component.html',
  styleUrls: ['./rondelica-form.component.scss']
})
export class RondelicaFormComponent implements OnInit {

  rondelicaForm = new FormGroup({
    dolzinaTraku: new FormControl(1000),
    sirinaTraku: new FormControl(100),
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


  readonly ROOT_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private router: Router, ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addRondelicaItem(this.rondelicaForm.value);

  }

  addRondelicaItem(form) {
    const data: RondelicaVnos = form
    this.http.post( this.ROOT_URL + '/rondelicaItems', data).subscribe((x:RondelicaVnos) => {
      console.log(x, 'data');
      this.router.navigate(['/rondelica/' + x.id],);

    }); 
  }

}

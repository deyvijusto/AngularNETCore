import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RondelicaVnos } from '../rondelica.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RondelicaItemsServiceProxy, RondelicaItem } from 'src/app/services/api.client.generated';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-rondelica-form',
  templateUrl: './rondelica-form.component.html',
  styleUrls: ['./rondelica-form.component.scss']
})
export class RondelicaFormComponent implements OnInit {

  rondelicaForm = new FormGroup({
    dolzinaTraku: new FormControl(300),
    sirinaTraku: new FormControl(100),
    polmerRondelic: new FormControl(30),
    razdaljaMedRondelicama: new FormControl(20),
    zgornjiInSpodnjiRob: new FormControl(5),
    zacetekInKonecRob: new FormControl(10),
  });

  constructor(private router: Router, private rondelicaService: RondelicaItemsServiceProxy) { }

  ngOnInit() {
  }

  onSubmit() {
    this.rondelicaService.postRondelicaItem(this.rondelicaForm.value).subscribe(response => {
      this.router.navigate(['/rondelica/' + response.id]);
    });
  }

}

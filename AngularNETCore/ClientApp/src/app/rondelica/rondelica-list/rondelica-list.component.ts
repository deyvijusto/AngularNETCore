import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RondelicaItemsServiceProxy, IRondelicaItem } from 'src/app/services/api.client.generated';

@Component({
  selector: 'app-rondelica-list',
  templateUrl: './rondelica-list.component.html',
  styleUrls: ['./rondelica-list.component.css']
})
export class RondelicaListComponent implements OnInit {

  items: IRondelicaItem[];

  constructor(private router: Router, rondelicaService: RondelicaItemsServiceProxy) {
    rondelicaService.getRondelicaItemAll().subscribe(response => {
      this.items = response;
    });
  }

  ngOnInit() {
  }

  getRondelicaId (id) {
    this.router.navigate(['./rondelica/' + id]);
  }

}

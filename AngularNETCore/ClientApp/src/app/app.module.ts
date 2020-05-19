import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RondelicaComponent } from './rondelica/rondelica.component';
import { RondelicaFormComponent } from './rondelica/rondelica-form/rondelica-form.component';
import { RondelicaListComponent } from './rondelica/rondelica-list/rondelica-list.component';
import { RondelicaDetailComponent } from './rondelica/rondelica-detail/rondelica-detail.component';
import { RondelicaItemsServiceProxy } from './services/api.client.generated';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      FetchDataComponent,
      RondelicaComponent,
      RondelicaFormComponent,
      RondelicaListComponent,
      RondelicaDetailComponent
   ],
   imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'rondelica', component: RondelicaComponent },
      { path: 'rondelica-list', component: RondelicaListComponent },
      { path: 'rondelica/:id', component: RondelicaDetailComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [RondelicaItemsServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }

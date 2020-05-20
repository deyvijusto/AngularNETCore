import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RondelicaComponent } from './rondelica/rondelica.component';
import { RondelicaFormComponent } from './rondelica/rondelica-form/rondelica-form.component';
import { RondelicaListComponent } from './rondelica/rondelica-list/rondelica-list.component';
import { RondelicaDetailComponent } from './rondelica/rondelica-detail/rondelica-detail.component';
import { RondelicaItemsServiceProxy } from './services/api.client.generated';
import { RondelicaIzrisComponent } from './rondelica/rondelica-izris/rondelica-izris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      RondelicaComponent,
      RondelicaFormComponent,
      RondelicaListComponent,
      RondelicaDetailComponent,
      RondelicaIzrisComponent
   ],
   imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RondelicaItemsServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }

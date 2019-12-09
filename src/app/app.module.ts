import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAddressComponent } from './form-address/form-address.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormAddressComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BootstrapModalModule,
    NgbModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './service/user.service';



import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ThemeComponent } from './views/theme/theme.component';
import { AssociateDetailsComponent } from './views/dashboard/associate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DashboardComponent,
    ThemeComponent,
    AssociateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})


export class AppModule { }

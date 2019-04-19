import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule,MatFormFieldModule, MatInputModule, MatPaginatorModule} from '@angular/material';


import { UserService } from './service/user.service';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ThemeComponent } from './views/theme/theme.component';
import { UserDetailsComponent } from './views/dashboard/user-details.component';
import { NavbarComponent } from './views/common/navbar.component';
import { MetricsService } from './service/metrics.service';
import { AssociateDetailsComponent } from './views/dashboard/associate-details.component';
import { ParticipationMetricDetailsComponent } from './views/dashboard/participation-metric-details.component';
import { EngagementMetricsComponent } from './views/dashboard/engagement-metrics.component';
import { GenericMetricsComponent } from './views/dashboard/generic-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DashboardComponent,
    ThemeComponent,
    UserDetailsComponent,
    AssociateDetailsComponent,
    NavbarComponent,
    ParticipationMetricDetailsComponent,
    EngagementMetricsComponent,
    GenericMetricsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService,MetricsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})

export class AppModule { }

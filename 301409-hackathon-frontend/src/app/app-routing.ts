import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ThemeComponent } from './views/theme/theme.component';
import { EngagementMetricsComponent } from './views/dashboard/engagement-metrics.component';
import { GenericMetricsComponent } from './views/dashboard/generic-metrics.component';

export const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'engagement',
    component: EngagementMetricsComponent
  },
  {
    path: 'generic',
    component: GenericMetricsComponent
  },
  {
    path: 'theme',
    component: ThemeComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []  
})

export class AppRoutingModule { }
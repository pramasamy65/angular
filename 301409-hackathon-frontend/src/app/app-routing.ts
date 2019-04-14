import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ThemeComponent } from './views/theme/theme.component';

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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class AuthRoutingModule {}

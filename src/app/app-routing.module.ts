import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { ListComponent } from './HomePage/list/list.component';
import { CoindetailComponent } from './homepage/coindetail/coindetail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'table', component:ListComponent},
  {path: 'detail/:id', component:CoindetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DisplaycollectionsComponent} from './displaycollections/displaycollections.component';
const routes: Routes = [
  // {path:'',redirectTo:'\home',pathMatch:'full'},
  {path: '', component: HomeComponent},
  {path: 'displaycollections', component: DisplaycollectionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

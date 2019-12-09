import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAddressComponent } from './form-address/form-address.component';

const routes: Routes = [{
  path:'', component:FormAddressComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


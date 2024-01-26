import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { FragenComponent } from './fragen/fragen.component';
import { CheckMComponent } from './check-m/check-m.component';

const routes: Routes = [

  {path:'',redirectTo:'start',pathMatch:'full'},
  {path:"start", component:StartSeiteComponent},
  {path:"fragen", component:FragenComponent},
  {path:"check-m", component:CheckMComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

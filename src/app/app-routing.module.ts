import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { FragenComponent } from './fragen/fragen.component';

const routes: Routes = [

  {path:'',redirectTo:'welcome'},
  {path:"start", component:StartSeiteComponent},
  {path:"question", component:FragenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

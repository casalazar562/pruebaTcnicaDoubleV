import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/page/add-user.component';
import { ContentComponent } from './Components/content/content.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path: 'home',
  canActivate: [],
  component: ContentComponent,
  children: [
    { path: 'registro', component: AddUserComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

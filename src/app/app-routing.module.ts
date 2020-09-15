import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent} from './vistas/nuevo/nuevo.component';
import { EditarComponent} from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';


const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'nuevo', component:NuevoComponent },
  { path:'editar', component:EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]

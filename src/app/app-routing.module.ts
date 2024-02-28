import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { PlayerCardListComponent } from './player-card-list/player-card-list.component';

const routes: Routes = [
{path : "registre" , component: RegistreComponent},
{path : "login" , component: LoginComponent},
{path : "profile" , component: ProfilComponent},
{path : "playerslist" , component: PlayerCardListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {PetsListComponent} from "./pets/pet-list/pets-list.component";
import {CommonModule} from "@angular/common";
import {PetDetailsComponent} from "./pets/pet-details/pet-details.component";
import {PetAddComponent} from "./pets/pet-add/pet-add.component";
import {PetUpdateComponent} from "./pets/pet-update/pet-update.component";
import {OwnerListComponent} from "./owners/owner-list/owner-list.component";
import {OwnerAddComponent} from "./owners/owner-add/owner-add.component";
import {OwnerUpdateComponent} from "./owners/owner-update/owner-update.component";
import {OwnerDetailsComponent} from "./owners/owner-details/owner-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
  { path: 'UserToken', component: LoginComponent },
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetDetailsComponent , canActivate: [AuthGuard]},
  { path: 'owners/:id', component: OwnerDetailsComponent , canActivate: [AuthGuard]},
  { path: 'owners', component: OwnerListComponent, canActivate: [AuthGuard]},
  { path: 'owner-add', component: OwnerAddComponent , canActivate: [AuthGuard]},
  { path: 'owner-update/:id', component: OwnerUpdateComponent , canActivate: [AuthGuard]},
  { path: 'pets', component: PetsListComponent , canActivate: [AuthGuard]},
  { path: 'pet-add', component: PetAddComponent , canActivate: [AuthGuard]},
  { path: 'pet-update/:id', component: PetUpdateComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

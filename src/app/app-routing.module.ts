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
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'UserToken', component: LoginComponent },
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  //{ path: '**', redirectTo: '' },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent },
  { path: 'owners', component: OwnerListComponent },
  { path: 'owner-add', component: OwnerAddComponent },
  { path: 'owner-update/:id', component: OwnerUpdateComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'pet-add', component: PetAddComponent },
  { path: 'pet-update/:id', component: PetUpdateComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

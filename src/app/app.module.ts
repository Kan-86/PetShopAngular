import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pet-list/pets-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import {HttpClientModule} from "@angular/common/http";
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import { OwnerDetailsComponent } from './owners/owner-details/owner-details.component';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./shared/services/authentication.service";
import {TodoItemService} from "./shared/services/todo-item.service";
import {AlertModule, ButtonsModule, PaginationModule} from "ngx-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {MzDropdownModule, MzModalModule, MzNavbarModule} from "ngx-materialize";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerUpdateComponent,
    OwnerDetailsComponent,
    OwnerAddComponent,
    OwnerListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    TodoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

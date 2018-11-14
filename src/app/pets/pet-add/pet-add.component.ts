import { Component, OnInit } from '@angular/core';
import {PetService} from "../../shared/services/pet.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    petName: new FormControl(''),
    petType: new FormControl(''),
    colour: new FormControl(''),
    details: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }
  save()
  {
    // data static for now, later we add forms!! ;D
    const pet = this.petForm.value;
    this.petService.addPet(pet)
      .subscribe(() => {
        this.router.navigateByUrl('/pets');
      });
  }
}
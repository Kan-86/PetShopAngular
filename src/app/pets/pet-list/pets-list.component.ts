import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {PetService} from "../../shared/services/pet.service";

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit
{
  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit(){
    // Handle Data!
    this.refresh();
  }

  refresh()
  {
    this.petService.getPets()
      .subscribe(listOfPets => {
        this.pets = listOfPets;
      });
  }

  delete(id: number)
  {
    this.petService.deletePet(id)
      .subscribe(m => {
        this.refresh();
      });
    //this.pets = this.petService.getPets();
  }
}

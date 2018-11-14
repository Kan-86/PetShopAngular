import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {PetService} from "../../shared/services/pet.service";
import {OwnerService} from "../../shared/services/owner.service";
import {Owner} from "../../shared/models/owner";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit
{
  owners: Owner[];
  constructor(private ownerService: OwnerService) { }

  ngOnInit(){
    // Handle Data!
    this.refresh();
  }

  refresh()
  {
    this.ownerService.getOwners()
      .subscribe(listOfOwners => {
        this.owners = listOfOwners;
      });
  }

  delete(id: number)
  {
    this.ownerService.deleteOwner(id)
      .subscribe(() => {
        this.refresh();
      });
    //this.pets = this.petService.getPets();
  }
}

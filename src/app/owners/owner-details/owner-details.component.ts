import { Component, OnInit } from '@angular/core';
import {Pet} from "../../shared/models/pet";
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../shared/services/pet.service";
import {OwnerService} from "../../shared/services/owner.service";
import {Owner} from "../../shared/models/owner";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  owner: Owner;
  constructor(private route: ActivatedRoute, private ownerService: OwnerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id)
      .subscribe(ownerFromReset => {
        this.owner = ownerFromReset;
      });
  }

}

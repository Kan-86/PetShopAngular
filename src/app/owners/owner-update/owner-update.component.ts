import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../shared/services/pet.service";
import {OwnerService} from "../../shared/services/owner.service";

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit
{

  id: number;

  ownerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.ownerService.getOwnerById(this.id)
      .subscribe(ownerFromRest => {
        this.ownerForm.patchValue({
          firstName: ownerFromRest.firstName,
          lastName: ownerFromRest.lastName,
          address: ownerFromRest.address,
          phoneNumber: ownerFromRest.phoneNumber,
          email: ownerFromRest.email
        });
      });
  }

  save()
  {
    // data static for now, later we add forms!! ;D
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner)
      .subscribe(() => {
        this.router.navigateByUrl('/owners');
      });
  }
}

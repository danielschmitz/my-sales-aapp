import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styles: [
  ]
})
export class SuppliersEditComponent implements OnInit {

  id!:Number;
  supplier!: Supplier;
  supplierForm!: FormGroup;

  constructor(
    private route:ActivatedRoute,
    private supplierService:SupplierService,
    private fb: FormBuilder
    ) { }

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id')||0);

    if (this.id) {
      this.supplier = await lastValueFrom(this.supplierService.getById(this.id))
    
      this.supplierForm = this.fb.group({
        id: [this.supplier.id],
        companyName: [this.supplier.companyName, [Validators.required, Validators.minLength(3)]],
        contactName: [this.supplier.contactName, , [Validators.required, Validators.minLength(3)]],
        contactTitle: [this.supplier.contactTitle],
        address: this.fb.group(
          {
            city: [this.supplier.address.city],
            country: [this.supplier.address.country],
            phone: [this.supplier.address.phone],
            postalCode: [this.supplier.address.postalCode],
            region: [this.supplier.address.region],
            street: [this.supplier.address.street]
          }
        )
      })
    
    
    
    
    }
    
  }

  onSubmit() {
    console.log('submit')
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styles: [
  ]
})
export class SuppliersEditComponent implements OnInit {

  id!: Number;
  supplier!: Observable<Supplier>;
  supplierForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {

    this.supplierForm = this.fb.group({
      id: [''],
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      contactName: ['',[Validators.required, Validators.minLength(3)]],
      contactTitle: [''],
      address: this.fb.group(
        {
          city: [''],
          country: [''],
          phone: [''],
          postalCode: [''],
          region: [''],
          street: ['']
        }
      )
    })

    this.id = +(this.route.snapshot.paramMap.get('id') || 0);

    if (this.id) {
      this.supplier = this.supplierService.getById(this.id)
      this.supplierForm.patchValue(await lastValueFrom(this.supplier))
    }

  }

  onSubmit() {
    console.log('submit')
  }

}

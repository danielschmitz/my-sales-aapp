import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Supplier } from '../supplier.dto';

@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styles: [
  ]
})
export class SuppliersFormComponent implements OnInit {

  @Input() supplier!: Supplier;
  @Output() save = new EventEmitter<Supplier>();
  supplierForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      id: [this.supplier.id],
      companyName: [this.supplier.companyName, [Validators.required, Validators.minLength(3)]],
      contactName: [this.supplier.contactName, [Validators.required, Validators.minLength(3)]],
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

  onSubmit() {
    this.save.emit(this.supplierForm.value);
  }

}

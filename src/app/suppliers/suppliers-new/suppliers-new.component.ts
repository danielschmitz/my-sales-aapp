import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-new',
  templateUrl: './suppliers-new.component.html',
  styles: [
  ]
})
export class SuppliersNewComponent implements OnInit {

  supplier: Supplier = {
    companyName: '',
    contactName: '',
    contactTitle: '',
    address: {
      city: '',
      phone: '',
      country: '',
      postalCode: 0,
      region: '',
      street: ''
    }
  }

  constructor(private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSave(supplier: Supplier) {
    console.log('save new supplier', supplier);
    const result = await lastValueFrom(this.supplierService.save(supplier));
    console.log('result new supplier', result)
    this.router.navigate(['/suppliers/show',result.id]);
  }

}

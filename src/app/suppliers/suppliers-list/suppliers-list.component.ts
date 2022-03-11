import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styles: [
  ]
})
export class SuppliersListComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private supplierService:SupplierService) { }

  async ngOnInit() {

    try {
      
      this.suppliers = await lastValueFrom(this.supplierService.getAll());

    } catch (error) {
      console.error(error)
    }

  }

}

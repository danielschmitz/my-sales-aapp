import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styles: [
  ]
})
export class SuppliersListComponent implements OnInit {

  suppliers!: Supplier[];
  supplierObservable!: Observable<Supplier[]>;

  constructor(private supplierService: SupplierService) { }

  async ngOnInit() {
      this.supplierObservable = this.supplierService.getAll();
      this.suppliers = await lastValueFrom(this.supplierObservable);
  }

}

import { Component, OnInit } from '@angular/core';
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
  supplierObservable!: Observable<Supplier>;
  supplier!: Supplier;

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService,
  ) { }

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);

    if (this.id) {
      this.supplierObservable = this.supplierService.getById(this.id)
      this.supplier = await lastValueFrom(this.supplierObservable)
    }

  }

  async onSave(supplier: Supplier) {
    console.log('save', supplier)
    this.supplierObservable = this.supplierService.save(supplier);
    this.supplier = await lastValueFrom(this.supplierObservable);
  }

}

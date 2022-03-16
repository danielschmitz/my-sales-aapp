import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-new',
  templateUrl: './suppliers-new.component.html',
  styles: [
  ]
})
export class SuppliersNewComponent implements OnInit {

  supplierObservable!: Observable<Supplier>;
  supplier!: Supplier

  constructor(private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit() {
    this.supplierObservable = this.supplierService.create();
    this.supplierObservable.subscribe( supplier => {
      this.supplier = supplier;
    })
  }

  async onSave(supplier: Supplier) {
    this.supplierObservable = this.supplierService.save(supplier)
    const result = await lastValueFrom(this.supplierObservable);
    this.router.navigate(['/suppliers/show', result.id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-show',
  templateUrl: './suppliers-show.component.html',
  styles: [
  ]
})
export class SuppliersShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) { }

  id!: Number;
  supplier!: Supplier;

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);

    if (this.id) {
      this.supplier = await lastValueFrom(this.supplierService.getById(this.id))
    }


  }

}

import { Category } from './../categories/category.dto';
import { Supplier } from './../suppliers/supplier.dto';

export interface Product {
  id?: number;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  discontinued: boolean;
  name: string;
  supplier?: Supplier;
  category?: Category;
}

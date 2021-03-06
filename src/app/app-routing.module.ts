import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesLoadingAsyncComponent } from './categories/categories-loading-async/categories-loading-async.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories-async', component: CategoriesLoadingAsyncComponent },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      {
        path: '',
        component: SuppliersListComponent
      },
      {
        path: 'show/:id',
        component: SuppliersShowComponent
      },
      {
        path: 'edit/:id',
        component: SuppliersEditComponent
      },
      {
        path: 'delete/:id',
        component: SuppliersDeleteComponent
      },
      {
        path: 'new',
        component: SuppliersNewComponent
      }
    ]
  },
  {
    path: '', component: ProductsComponent, children: [
      {
        path: '',
        component: ProductsListComponent
      },
    ]
  },
  { path: 'checkout', component: CheckoutComponent },

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

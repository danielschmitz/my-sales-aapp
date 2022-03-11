import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      {
        path: '',
        component: SuppliersListComponent
      }
    ]
  },
  { path: '', component: DashboardComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

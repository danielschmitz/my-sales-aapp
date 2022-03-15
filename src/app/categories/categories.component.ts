import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { Category } from './category.dto';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
    `
      .full-width-table {
        width: 100%;
      }
    `,
  ],
})
export class CategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;

  dataSource!: MatTableDataSource<Category>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'actions'];

  showForm: Boolean = false;

  showLoading: Boolean = false;

  showLoadingForm: Boolean = false;

  category!: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.refreshData();
  }


  async refreshData() {
    this.showLoading = true;

    try {

      const categories: Category[] = await lastValueFrom(
        this.categoryService.getAll()
      );
      this.dataSource = new MatTableDataSource(categories);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;


    } catch (error) {

      console.log("opsss!!", error);

    } finally {
      this.showLoading = false;
    }

  }

  onNewCategoryClick() {
    this.category = {
      id: 0,
      name: '',
      description: '',
    };
    this.showForm = true;
  }

  onEditCategoryClick(category: Category) {
    console.log('edit category', category);
    this.category = category;
    this.showForm = true;
  }

  onDeleteCategoryClick(category: Category) {
    console.log('delete category', category);

    if (confirm(`Delete "${category.name}" with id ${category.id} ?`)) {
      this.categoryService
        .delete(category.id)
        .subscribe(() => this.refreshData());
    }
  }

  onBackForm() {
    this.showForm = false;
    this.refreshData();
  }

  onSave(category: Category) {
    console.log('save on category.component.ts', category);
    this.showLoadingForm = true;

    this.categoryService.save(category).subscribe((categorySaved) => {
      console.log('category saved:', categorySaved);

      this.showForm = false;
      this.refreshData();
      this.showLoadingForm = false;
    });
  }
}

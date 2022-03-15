import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Category } from '../category.dto';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories-loading-async',
  templateUrl: './categories-loading-async.component.html',
  styles: [
  ]
})
export class CategoriesLoadingAsyncComponent implements OnInit {

  categoriesObservable!: Observable<Category[]>;
  categories: Category[] = [];

  constructor(private categoriesService: CategoryService) { }

  async ngOnInit() {
    this.categoriesObservable = this.categoriesService.getAll();
    this.categories = await lastValueFrom(this.categoriesObservable)
  }

}

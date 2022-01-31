import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <mat-toolbar>Menu</mat-toolbar>
      <mat-nav-list>
        <a
          mat-list-item
          *ngFor="let item of menuItems; index as i"
          [href]="item.path"
          >{{ item.label }}</a
        >
      </mat-nav-list>
    </div>
  `,
  styles: [],
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItem> = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/categories',
      label: 'Categories',
    },
    {
      path: '/suppliers',
      label: 'Suppliers',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

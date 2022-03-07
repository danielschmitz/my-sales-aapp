import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  template: `
   <div *ngIf="visible" 
      style="display: flex; justify-content: center; 
      align-items: center; background: white;">
      <mat-progress-spinner 
        color="primary" 
        mode="indeterminate">
      </mat-progress-spinner>
  </div>
  `
})
export class LoadingBarComponent implements OnInit {

  @Input() visible: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

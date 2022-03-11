import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suppliers-show',
  templateUrl: './suppliers-show.component.html',
  styles: [
  ]
})
export class SuppliersShowComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  id:string='';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    
  }

}

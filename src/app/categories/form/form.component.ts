import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categoryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}

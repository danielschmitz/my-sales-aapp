import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categoryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('')
  })

  @Output() back = new EventEmitter();

  @Output() save = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit on form.component.ts", this.categoryForm.value)
    this.save.emit(this.categoryForm.value);
  }

  onBack(){
    this.back.emit();
  }


}

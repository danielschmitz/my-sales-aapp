import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Output() back = new EventEmitter();

  @Output() save = new EventEmitter<Category>();


  // categoryForm = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   description: new FormControl('')
  // })
  categoryForm = this.fb.group(
    {
      id: [''],
      name: ['',[Validators.required, Validators.minLength(3)]],
      description: ['']
    }
  )

  @Input()
  set category(category: Category) {
    console.log('setting new category value')
    this.categoryForm.setValue(category);
  }
  
  constructor(private fb: FormBuilder) { }

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

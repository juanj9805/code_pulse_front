import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddCategoryRequest } from '../models/category.model';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
  constructor() {
    effect(() => {
      if (this.categoryService.addCategoryStatus() === 'success') {
        console.log('Op');
        // redirect back to category list
      }
      if (this.categoryService.addCategoryStatus() === 'error') {
        console.log('Add category request field');
      }
    });
  }
  private categoryService = inject(CategoryService);
  // Import reactive forms module
  // Create Formgroups -> FormControls

  addCategoryFormGroup = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    urlHandle: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(10)],
    }),
  });

  get nameFormControl() {
    return this.addCategoryFormGroup.controls.name;
  }

  get urlHandleFormControl() {
    return this.addCategoryFormGroup.controls.urlHandle;
  }

  // Testing
  onSubmit() {
    const addCategory = this.addCategoryFormGroup.getRawValue();

    const addCategoryRequestDto: AddCategoryRequest = {
      name: addCategory.name,
      urlHandle: addCategory.urlHandle,
    };

    this.categoryService.addCategory(addCategoryRequestDto);
  }
}

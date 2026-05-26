import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
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
    console.log(this.addCategoryFormGroup.getRawValue());
  }
}

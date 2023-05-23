import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface FormField {
  name: string;
  type: string;
  label: string;
  required: boolean;
}

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Input() fields: FormField[] = [];
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = this.generateForm();
  }

  generateForm(): FormGroup {
    const formGroup = new FormGroup({});
    this.fields.forEach((field) => {
      formGroup.addControl(
        field.name,
        new FormControl('', field.required ? Validators.required : null)
      );
    });
    return formGroup;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}

import { Component } from '@angular/core';

interface FormField {
  name: string;
  type: string;
  label: string;
  required: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-generator';
  fields: FormField[] = [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'message', type: 'textarea', label: 'Message', required: false },
    { name: 'message1', type: 'textarea', label: 'Message11', required: true },
  ];

  onFormSubmit(formData: any) {
    // Handle form submission
    console.log(formData);
  }
}

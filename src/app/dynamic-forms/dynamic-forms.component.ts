import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
})
export class DynamicFormsComponent  {

  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: 'firstname',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'Password',
      label: 'Password',
      value: '',
      // required: true,
      onChack: this.onChack.bind(this)
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    /*{
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this)
    },*/
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];

  constructor() {
    this.form = new FormGroup({

      fields: new FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log('update');
      console.log(update);
      this.fields = JSON.parse(update.fields);
      console.log(this.fields);
    });
  }

  onUpload(e) {
    console.log('e');
    console.log(e);
  }

  onChack(e) {
    console.log(e);
  }

  getFields() {
    // console.log(this.fields);
    return this.fields;

  }

  ngDistroy() {
    this.unsubcribe();
    console.log("this.unsubcribe");
    console.log(this.unsubcribe);
  }
}

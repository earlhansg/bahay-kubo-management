import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

/* icons */
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup = new FormGroup({});
  model = {};
  faCog = faCog;

  @Input() buttonLabel: string;
  @Input() fields: FormlyFieldConfig[];
  @Input() isLoading?: Observable<boolean>;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  submitForm(formValues): void {
    this.submitted.next(formValues);
    this.form.reset();
  }

}

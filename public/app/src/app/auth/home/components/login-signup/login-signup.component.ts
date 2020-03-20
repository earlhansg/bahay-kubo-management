import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { FormComponent } from '@app/shared/components/form/form.component';

import { tabs, Tab } from './login-signup.data';
@Component({
selector: 'app-login-signup',
changeDetection: ChangeDetectionStrategy.OnPush,
templateUrl: './login-signup.component.html',
styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
@ViewChild(FormComponent, {static: false}) formComponent: FormComponent;

tabs: Tab[] = tabs;

constructor(private router: Router ) { }

ngOnInit() {}

selectTab(index: number): void {
  this.formComponent.form.reset();
}

onSubmittedForm(credentials): void {
  const { username, password } = credentials;
  const payload = { username, password };
  this.router.navigateByUrl('condominium');
}

}

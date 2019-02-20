import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  @ViewChild('f') form: NgForm;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log("email: " + form.value.email);
  //   console.log("username: " + form.value.username);
  // }

  // Another way to access via the viewchild
  onSubmit() {
    console.log(this.form);
  }
}

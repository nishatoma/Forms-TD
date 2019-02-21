import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  @ViewChild('f') form: NgForm;
  defaultQuestion = 'pet';
  answer: string = '';
  genders = ['male', 'female', 'other'];

  user1 = {
    username: '',
    email: '',
    secret: '',
    gender: 'sadas',
    answer: '',
  };
    
  

  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   }, 
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    // =============================
    // Set value is for the whole form while patch
    // value is for one aspect of it.
    this.form.form.patchValue({userData: {username:suggestedName}});  
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log("email: " + form.value.email);
  //   console.log("username: " + form.value.username);
  // }

  // Another way to access via the viewchild
  onSubmit() {
    this.submitted = true;
    console.log(this.user1.username);
    this.user1.username = this.form.value.userData.username;
    console.log(this.user1.username);
    this.user1.email = this.form.value.userData.email;
    this.user1.secret = this.form.value.secret;
    this.user1.answer = this.form.value.questionAnswer;
    this.user1.gender = this.form.value.gender;
    this.form.reset();
  }
}

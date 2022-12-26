import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  title = 'form-rx';

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]], // Valeur par défaut
      name: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]], // Valeur par défaut
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),      
      ]],
      phones: this.formBuilder.array([]),
      terms: ['', [
        Validators.requiredTrue
      ]]
    });

    this.addPhone();
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get phones() {
    return this.registerForm.get('phones') as FormArray;
  }

  get terms() {
    return this.registerForm.get('terms');
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });

    if(this.phones.length < 3)
      this.phones.push(phone); // 0 => phone // 1 => ph

    console.log(this.phones);
  }

  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }

  deletePhone(index: number) {
    this.phones.removeAt(index); // Supprime là (index) 0...n
  }


  submit() {
    if (!this.registerForm.valid) {
      alert('Form is invalid')
      return;
    }

    alert('Success');
  }
}
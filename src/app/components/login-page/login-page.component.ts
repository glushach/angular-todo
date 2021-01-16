import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
        email = 'testuser@todo.com';
        password = '12345678';
        active = localStorage.getItem('isEntrance'); //без этого присвоения не исчезает модалка входа
        hidden;
  
  @Output() onHidden = new EventEmitter();

  form: FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required, Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }

  submit() {
    if(this.form.valid) {
      const formData = {...this.form.value}
      if(formData.email === this.email && formData.password === this.password) {
        localStorage.setItem('isEntrance', 'yes');
        this.active = this.hidden = localStorage.getItem('isEntrance');
        this.onHidden.emit(this.hidden)
      }
    }
  }
}
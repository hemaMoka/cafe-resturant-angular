import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
      constructor(private _ToastrService:ToastrService,private _AuthServiceService:AuthService , private _Router:Router){}
  registerForm : FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1 2 0 5][0-9]{8}$/)]),
    password:new FormControl(null,[Validators.required])
  })

  handleRegister(form: FormGroup) {
    this._AuthServiceService.signUp(form.value).subscribe({
      next:(res)=>{
        console.log(res);
        this._Router.navigate(['/login']);
        this._ToastrService.success('Registred Confirm', 'Success');
      }
    })
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
     constructor(private _ToastrService:ToastrService){}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null,Validators.required)
  })

  handleContact() {
    this.contactForm.reset();
    this._ToastrService.success("Your Message Recived" , " Success")
  }
}

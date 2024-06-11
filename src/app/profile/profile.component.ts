import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    constructor(private _ToastrService:ToastrService){}
  userData: any;
  AddProfileForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    menue:new FormControl(null , [Validators.required]),
    address:new FormControl(null , [Validators.required])
  })

  ngOnInit(): void {
    this.userData = JSON.parse(`${localStorage.getItem('user')}`)[0]
  }

  handleAddProfile() {
    this._ToastrService.success("Your Request is Recived" , "Success")
    this.AddProfileForm.reset();
  }
}

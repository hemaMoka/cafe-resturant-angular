import { Component, OnInit } from '@angular/core';
import { CafeServicesService } from '../cafe-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _CafeServicesService:CafeServicesService){}
  cafes: any[] = [];
  ngOnInit(): void {
    this._CafeServicesService.getcafe().subscribe({
      next: (res) => {
        this.cafes = res;
      }
      })
  }
}

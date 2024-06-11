import { Component, OnInit } from '@angular/core';
import { CafeServicesService } from '../cafe-services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-caffies',
  templateUrl: './caffies.component.html',
  styleUrls: ['./caffies.component.scss']
})
export class CaffiesComponent implements OnInit {
  constructor(private _CafeServicesService:CafeServicesService , private _ActivatedRoute:ActivatedRoute){}

  cafeId: string | null = null;
  cafe: any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.cafeId=res.get('id')
        }
    })

    this._CafeServicesService.getSpacificCafe(this.cafeId).subscribe({
      next: (res) => {
        this.cafe=res;
      }
    })
  }

}

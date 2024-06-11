import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CafeServicesService {

  constructor(private _HttpClient: HttpClient) { }

  getcafe(): Observable<any>{
    return this._HttpClient.get("https://cafe-server-odjx.onrender.com/Alexandria")
  }

  getSpacificCafe(id: string | null): Observable<any>{
    return this._HttpClient.get(`https://cafe-server-odjx.onrender.com/Alexandria/${id}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor(private http:HttpClient) { }

  // get states

  getState():Observable<any>{
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
  }

  getDistrict(stateid:any):Observable<any>{

    return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`)

  }

  // get vaccine slot by district
  getslotByDistrict(dist_id:any,date:any):Observable<any>{

    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dist_id}&date=${date}`)

  }

  // get vaccine slot by pin
  getslotByPin(pin:any,date:any):Observable<any>{

    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`)

  }

  // get slot by location
  getslotByLocation(lat:any,long:any):Observable<any>{

    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${long}`)

  }
}

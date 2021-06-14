import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccinebylocation',
  templateUrl: './vaccinebylocation.component.html',
  styleUrls: ['./vaccinebylocation.component.scss']
})
export class VaccinebylocationComponent implements OnInit {

  lattitude:any
  longitude:any
  slots:any

  constructor(private service:VaccineService) { }

  ngOnInit(): void {

  if (navigator.geolocation) {
    let result = navigator.geolocation.getCurrentPosition(pos=>{
      console.log(pos)
      this.lattitude = pos.coords.latitude
      this.longitude = pos.coords.longitude
      this.service.getslotByLocation(this.lattitude,this.longitude).subscribe(data=>{
        console.log(data)
        this.slots = data.centers
      })
    });
  } 
  else {
    console.log("possition not supported by browser")
  
  }
  }


}

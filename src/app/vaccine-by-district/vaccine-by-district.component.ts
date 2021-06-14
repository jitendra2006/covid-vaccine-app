import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccine-by-district',
  templateUrl: './vaccine-by-district.component.html',
  styleUrls: ['./vaccine-by-district.component.scss']
})
export class VaccineByDistrictComponent implements OnInit {

  states:any
  districts:any
  district_id:any
  date:String=''
  slots:any
  isSearched=false
  constructor(private service:VaccineService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(data=>{
      console.log(data)
      this.states = data.states
    })
  }

  onChange(event:any){
    console.log("onchange")
    console.log(event)
    console.log(event.target.value)
    this.service.getDistrict(event.target.value).subscribe(data=>{
      console.log(data)
      this.districts = data.districts
    })

  }

  onSubmit(){
    this.isSearched = true
    let tempdate:string[]
    let reversedate:string[]
    console.log("dis and date")
    console.log("dist")
    console.log(typeof this.date)
    tempdate = this.date.split('-')
     reversedate = tempdate.reverse()
     let cnfdate = reversedate.join('-')
    // console.log(this.date)
    // console.log(tempdate)
    // console.log(cnfdate)
    this.service.getslotByDistrict(this.district_id,cnfdate).subscribe(data=>{
      console.log(data)
      this.slots = data.sessions
        })
  }

  onDistrictChange(event:any){
    console.log("dist")
    this.district_id = event.target.value
    console.log(this.district_id)
  }
}

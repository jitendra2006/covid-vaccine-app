import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccine-by-pin',
  templateUrl: './vaccine-by-pin.component.html',
  styleUrls: ['./vaccine-by-pin.component.scss']
})
export class VaccineByPinComponent implements OnInit {

  pin:any
  slots:any
  date:any
  clicked=false
  constructor(private service:VaccineService) { }

  ngOnInit(): void {
  }


  search(code:any){
    this.clicked = true
    console.log("search")
    console.log(code)
    let tempdate:string[]
    let reversedate:string[]
    tempdate = this.date.split('-')
     reversedate = tempdate.reverse()
     let cnfdate = reversedate.join('-')
    // console.log(this.date)
    // console.log(tempdate)
    // console.log(cnfdate)
    this.service.getslotByPin(this.pin,cnfdate).subscribe(data=>{
      console.log(data)
      this.slots = data.sessions
        })
  }
}

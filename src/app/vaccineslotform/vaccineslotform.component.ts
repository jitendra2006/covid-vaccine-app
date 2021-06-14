import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccineslotform',
  templateUrl: './vaccineslotform.component.html',
  styleUrls: ['./vaccineslotform.component.scss']
})
export class VaccineslotformComponent implements OnInit {

  state= false
  district=false;
  location = false
  constructor() { }


  ngOnInit(): void {
  }

  onState(){
    console.log("state")
    this.state = true
    this.district = false
    this.location = false

  }

  onDistrict(event:any){
    console.log("dist")
    console.log(event)
    this.district = true
    this.state = false
    this.location = false
  }

  onLocation(){
    console.log("location")
    this.location = true
    this.district = false
    this.state = false
  }

  

}

// document.getElementById('h1')?.innerHTML = "Hello"



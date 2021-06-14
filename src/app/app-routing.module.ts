import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './slider/slider.component';
import { VaccineByDistrictComponent } from './vaccine-by-district/vaccine-by-district.component';
import { VaccineByPinComponent } from './vaccine-by-pin/vaccine-by-pin.component';
import { VaccinebylocationComponent } from './vaccinebylocation/vaccinebylocation.component';

const routes: Routes = [
  {
    path:'',component:SliderComponent
  },
  {
    path:'district',component:VaccineByDistrictComponent
  },
  {
    path:'bypincode',component:VaccineByPinComponent
  },
  {
    path:'location',component:VaccinebylocationComponent
  },
  {
    path:'**',component:SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavigationComponent } from './navigation/navigation.component';
import { VaccineslotformComponent } from './vaccineslotform/vaccineslotform.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { VaccineByDistrictComponent } from './vaccine-by-district/vaccine-by-district.component';
import { VaccineByPinComponent } from './vaccine-by-pin/vaccine-by-pin.component';
import { SliderComponent } from './slider/slider.component';
import { VaccinebylocationComponent } from './vaccinebylocation/vaccinebylocation.component';
import { VaccineService } from './vaccine.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VaccineslotformComponent,
    CarouselComponent,
    VaccineByDistrictComponent,
    VaccineByPinComponent,
    SliderComponent,
    VaccinebylocationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [VaccineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

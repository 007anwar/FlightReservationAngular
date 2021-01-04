import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {
  findFlight: FormGroup;
  flights: any;
  showResults: boolean;
   allFlights:any;
  constructor(private _service: ReservationService) {
    this.showResults = true;

    this.findFlight = new FormGroup({
      from: new FormControl("NYC"),
      to: new FormControl("DAL"),
      departureDate: new FormControl("09-06-2018")
    })
  }
  public findFlights() {

    console.log(this.findFlight.value)
    this._service.getFlights(this.findFlight.value.from, this.findFlight.value.to, this.findFlight.value.departureDate).subscribe(response => {
      console.log(response);
      this.flights = response;
    }, (error) => {
      console.log(error);
    })
    this.showResults = false;
  }


  
  ngOnInit(): void {

    this._service.getAllFlight().subscribe(response => {
      console.log(response);
      this.allFlights = response;
    }, (error) => {
      console.log(error);
    })
  }

  }



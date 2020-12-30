import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
flights:any;
showResults:boolean;

  constructor(private _service:ReservationService) { }
  ngOnInit(): void {
    this._service.getAllFlight().subscribe(response => {
      console.log(response);
      this.flights = response;
    }, (error) => {
      console.log(error);
    })
    this.showResults = false;
  }


  
  public findAllFlights() {

  
    this._service.getAllFlight().subscribe(response => {
      console.log(response);
      this.flights = response;
    }, (error) => {
      console.log(error);
    })
    this.showResults = false;
  }

}

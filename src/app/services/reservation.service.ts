import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
flightsUrl:string="http://localhost:8080/flightservices/flights"
reservationUrl:string="http://localhost:8080/flightservices/reservations"
  constructor(private _httpClient:HttpClient) { }
  
  public getFlights(from:string,to:string,departureDate:string):any{
    return this._httpClient.get(this.flightsUrl+"?from="+from+"&to="+to+"&departureDate="+departureDate)
  }

  public getFlight(id:number):any{
    return this._httpClient.get(this.flightsUrl+"/"+id)
  }

  public getAllFlight():any{
    return this._httpClient.get(this.flightsUrl+"/all")
  }

  public saveReservation(reservation):any{
    return this._httpClient.post(this.reservationUrl,reservation)
  }
}

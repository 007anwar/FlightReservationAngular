import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
httpOptions:any;  baseurl:string="http://localhost:8080/flightservices"
flightsUrl:string="http://localhost:8080/flightservices/flights"
reservationUrl:string="http://localhost:8080/flightservices/reservations"
  constructor(private _httpClient:HttpClient) { 

    
 
  }

  public getFlights(from:string,to:string,departureDate:string):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.flightsUrl+"?from="+from+"&to="+to+"&departureDate="+departureDate,{headers})
  }

  public getFlight(id:number):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.flightsUrl+"/"+id,{headers})
  }

  public getAllFlight():any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.flightsUrl+"/all",{headers})
  }

  public saveReservation(reservation):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.post(this.reservationUrl,gitreservation,{headers})
  }
  public getPassengerByReservationId(reservationid:string):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.baseurl+"/passenger/"+reservationid,{headers})
  }
  public getFlightByReservationId(reservationid:string):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.baseurl+"/flight/"+reservationid,{headers})
  }
  public confirmReservationReservationId(reservationid:string):any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
    return this._httpClient.get(this.reservationUrl+"/confirm/"+reservationid,{headers})
  }
    public getReservationStatus(reservationid:string):any{
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("anwar" + ':' + "password") });
      return this._httpClient.get(this.baseurl+"/reservation/"+reservationid,{headers})
  }
}

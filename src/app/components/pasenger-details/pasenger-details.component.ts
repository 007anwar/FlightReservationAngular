import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-pasenger-details',
  templateUrl: './pasenger-details.component.html',
  styleUrls: ['./pasenger-details.component.css']
})
export class PasengerDetailsComponent implements OnInit {
  reservationResponse:Object;
flightData:any;
passengerFirstName:string;
passengerLastName:string;
passengerMiddleName:string;
passengerEmail:string;
passengerPhone:string;
cardNumber:string;
expirationDate:string;
securityCode:string;
flightId:string;
showNav:boolean;
  constructor(private route:ActivatedRoute,private _service:ReservationService) {

   }

  ngOnInit(): void {
   console.log(this.route.snapshot.paramMap.get("id"));
   this.flightId=this.route.snapshot.paramMap.get("id");
   this._service.getFlight(Number.parseInt(this.route.snapshot.paramMap.get("id"))).subscribe(
     response=>{
this.flightData=response;
      console.log(this.flightData)
   },err=>{
     console.log(err);
   })
 
  }
public hideLogic2()
{
  return true;
}
public hideLogic1()
{
  return true;
}
  public reserve(obj):any{
    obj.flightId=this.flightId;
    console.log("reserve");
console.log(obj)
this._service.saveReservation(obj).subscribe(
  response=>{
this.reservationResponse=response;
console.log("Reservation response")
console.log(this.reservationResponse);
  },err=>{
console.log(err);
  }
);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-pasenger-details',
  templateUrl: './pasenger-details.component.html',
  styleUrls: ['./pasenger-details.component.css']
})
export class PasengerDetailsComponent implements OnInit {
  reservationResponse:Object;
flightData:any;
passengerFirstName:string="Anwar";
passengerLastName:string="Mulla";
passengerMiddleName:string="MD";
passengerEmail:string="anwar.mulla@nihilent.com ";
passengerPhone:string="9763025121";
cardNumber:string="1234321";
expirationDate:string="120022";
securityCode:string="2323";
flightId:string;
showNav:boolean;
reservationId:string;
  constructor(private route:ActivatedRoute,private _service:ReservationService,private router:Router) {

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

  public reserve(obj):any{
    console.log("Reservation initiated")
    obj.flightId=this.flightId;
    console.log("reserve");
console.log(obj)
this._service.saveReservation(obj).subscribe(
  response=>{
this.reservationResponse=response;
console.error("RESERVATION RESPONSE"+response.id)
this.router.navigate(['confirmReservation',response.id]);
  },err=>{
console.log(err);
  }

);


  }

}

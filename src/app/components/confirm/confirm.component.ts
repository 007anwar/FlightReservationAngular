import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
reservationId:string="";
flight:any;
passenger:any;
reservationStatus:Object;
showDetails:boolean=true;
showConfirm:boolean;
confirmButton:string="confirm reservation";
  constructor(private _service:ReservationService,private route:ActivatedRoute,private router:Router) {
    this.confirmButton="confirm reservation"

   }

  ngOnInit(): void {

    this.confirmButton="confirm reservation";
    this.reservationId=this.route.snapshot.paramMap.get("reservationid");
    if(this.reservationId==":id")
    {
      this.reservationId="";
    }
    else
    {
      this.showDetails=false;
    }
    console.log(this.reservationId)
this.getReservationDetails();

  }

 public getReservationDetails()
  {
    console.log("gettting reservation details :" +this.reservationId)
    if(this.reservationId!="")
    {
      this.showDetails=false;
    }
    this._service.getFlightByReservationId(this.reservationId).subscribe(response=>{
      this.flight=response;
          },err=>{
      console.log(err)
 });
      
      
          this._service.getPassengerByReservationId(this.reservationId).subscribe(response=>{
            console.log("Getting passenger details")
            console.log(response)
            this.passenger=response;
                },err=>{
            console.log(err)
                });

                this._service.getReservationStatus(this.reservationId).subscribe(response=>{
this.reservationStatus=response;
console.log("RESERVATION STATUS->"+this.reservationStatus[2])
if(this.reservationStatus[2])
{
  this.confirmButton="YOUR RESERVATION IS CONFIRMED";

}
else{

  this.confirmButton="CONFIRM RESERVATION";

}
                },err=>{
console.log(err)
                })




  }

  public confirmReservation()
  {
  this._service.confirmReservationReservationId(this.reservationId).subscribe(response=>{
alert("Your reservation has been confirmed with reservation id: "+this.reservationId)
//this.router.navigate(['displayFlights']);
this.getReservationDetails();
  },err=>{
    console.log(err)
  })
  }

}

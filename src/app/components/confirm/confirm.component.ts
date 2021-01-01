import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
reservationId:string;
flight:any;
passenger:any;
  constructor(private _service:ReservationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reservationId=this.route.snapshot.paramMap.get("reservationid");
    console.log(this.reservationId)

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

  }

  public confirmReservation()
  {
  this._service.confirmReservationReservationId(this.reservationId).subscribe(response=>{
alert("Your reservation has been confirmed with reservation id: "+this.reservationId)
this.router.navigate(['displayFlights']);
  },err=>{
    console.log(err)
  })
  }

}

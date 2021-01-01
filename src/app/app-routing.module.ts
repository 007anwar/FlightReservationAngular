import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { PasengerDetailsComponent } from './components/pasenger-details/pasenger-details.component';


const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:"full"},
  {path:'displayFlights',component:DisplayFlightsComponent},
  {path:'findFlight',component:FindFlightsComponent},
  {path:'passengerDetails/:id',component:PasengerDetailsComponent},
  {path:'confirmReservation/:reservationid',component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

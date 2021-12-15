import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';

const routes: Routes = [
  // { path: '', component: BasePageComponent },
  { path: '', component: BusLineComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'minibus', component: MiniBusComponent },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

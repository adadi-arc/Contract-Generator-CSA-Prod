import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicecontractformComponent } from './servicecontractform/servicecontractform.component';
import { ServicecontractgeneratorComponent } from './servicecontractgenerator.component';
import { ListTrackingComponent } from './list-tracking/list-tracking.component';

const routes: Routes = [
  { path: '', component: ServicecontractgeneratorComponent },
  { path: 'ServiceContractForm', component: ServicecontractformComponent },
  { path: 'trackingList', component: ListTrackingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicecontractgeneratorRoutingModule { }

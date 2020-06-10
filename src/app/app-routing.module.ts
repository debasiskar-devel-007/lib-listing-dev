import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { LoginComponent } from './login/login.component';
import { BrandmanagementComponent } from './brandmanagement/brandmanagement.component';
import { InfluencersmanagementComponent } from "./influencersmanagement/influencersmanagement.component";
import { InfluencersdashbordComponent } from "./influencersdashbord/influencersdashbord.component";
import { BranddashbordComponent } from "./branddashbord/branddashbord.component";
import { AdmindashbordComponent } from "./admindashbord/admindashbord.component";
import { Resolveservice } from "./resolveservice";
import { AuthGuard } from './auth.guard';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AdminlistComponent } from "./adminlist/adminlist.component";
import { AdminformComponent } from "./adminform/adminform.component";
import { AdminmodalformComponent } from "./adminmodalform/adminmodalform.component";
import { EditrouteComponent } from "./editroute/editroute.component";
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { DformComponent } from "./dform/dform.component";
import { ListingInventoryComponent } from './inventorylist/listing-inventory/listing-inventory.component';


const routes: Routes = [
  { path: "admin", component: AdminmanagementComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: AdmindashbordComponent },
  // { path: "", component: LoginComponent},
  { path: "brand", component: BrandmanagementComponent },
  { path: "brand/:id", component: BrandmanagementComponent },
  { path: "admin/brand/:id/:title", component: BrandmanagementComponent },
  { path: "influencers", component: InfluencersmanagementComponent },
  { path: "influencersdashbord", component: InfluencersdashbordComponent, canActivate: [AuthGuard], resolve: { results: Resolveservice }, data: { source: 'users', condition: {} } },
  // { path: "adminlist", component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'users', condition: {} }},
  { path: "branddashbord", component: BranddashbordComponent, canActivate: [AuthGuard], resolve: { results: Resolveservice }, data: { source: 'users', condition: {} } },
  {
    path: "admindashbord", component: AdmindashbordComponent
    // , canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'admindashboard', condition: {} }
  }, {
    path: "admindashbord1", component: AdmindashbordComponent
    // , canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'admindashboard', condition: {} }
  },
  { path: 'forgatepassword', component: ForgatepasswordComponent },
  { path: 'dynamicforms', component: DynamicFormsComponent },
  { path: 'dforms', component: DformComponent },

  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'adminlist', component: AdminlistComponent },
  { path: 'adminform', component: AdminformComponent },
  { path: 'adminmodalform', component: AdminmodalformComponent },
  { path: 'editroute/:id', component: EditrouteComponent },

  { path: 'event', component: ListingInventoryComponent },

  { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard], resolve: { results: Resolveservice }, data: { source: 'users', condition: {} } },
  { path: "**", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import {PriceAdjustmentComponent} from "./pages/commodities/price-adjustment/price-adjustment.component";

export const routes: Routes = [
  {path: '', component: PriceAdjustmentComponent, pathMatch: 'full'},
  /*{path: '', redirectTo: 'commodities', pathMatch: 'full'},*/
  {path: '**', component: PriceAdjustmentComponent}
];

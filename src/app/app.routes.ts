import { Routes } from '@angular/router';
import {PriceAdjustmentComponent} from "./pages/commodities/price-adjustment/price-adjustment.component";

export const routes: Routes = [
  {path: 'commodities', component: PriceAdjustmentComponent},
  {path: '', redirectTo: 'commodities', pathMatch: 'full'}
];

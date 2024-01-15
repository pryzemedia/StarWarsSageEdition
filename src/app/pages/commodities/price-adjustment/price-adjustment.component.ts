import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CardHeaderComponent} from "../../../components/reusable/card-header/card-header.component";
import {ActivatedRoute, Router} from "@angular/router";
//import {MatButtonComponent} from "../../../components/reusable/mat-button/mat-button.component";
import {MatIconModule} from "@angular/material/icon";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {Clipboard} from "@angular/cdk/clipboard";
import {HttpPostService} from "../../../services/http-post.service";
import {CollapseAccComponent} from "../../../components/reusable/collapse/collapse-acc.component";
import {CollapseBtnComponent} from "../../../components/reusable/collapse-btn/collapse-btn.component";


interface Commodity {
  name: string;
  basePrice: number;
  supplyFactor: number;
  demandFactor: number;
  eventFactor: number;
  adjustedPrice: number;
  colorClass:string;
  hideItem: boolean;
  category?: string;
  icon?: string;
  bgClass?: string;
}

@Component({
  selector: 'app-price-adjustment',
  standalone: true,
  imports: [CommonModule, FormsModule, CardHeaderComponent, MatIconModule, ClipboardModule, CollapseAccComponent, CollapseBtnComponent],
  templateUrl: './price-adjustment.component.html',
  styleUrls: ['./price-adjustment.component.css']
})
export class PriceAdjustmentComponent implements OnInit{

  timestamp: Date | null = null;
  //read only, 0 = false, 1 = true
  ro: number = 0;
  readOnly: boolean = false;
  urlWithParams: string = '';
  readOnlyURL: string = '';

  queryString: string = "";

  constructor(private router: Router,
              private route: ActivatedRoute,
              private clipboard: Clipboard,
              private postService:HttpPostService) {}


  commodities: Commodity[] = [
    { name: 'Animal, Common Per Animal', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
    colorClass: 'primary', hideItem:false, category: 'Animals', icon: 'pets', bgClass: 'blue-header'},
    { name: 'Animal, Exotic Per Animal', basePrice: 2000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'success', hideItem:false, category: 'Animals'},
    { name: 'Animal, Livestock Per Animal', basePrice: 500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'warning', hideItem:false, category: 'Animals'},
    { name: 'Art, Common Per Art Piece', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Luxury Goods', icon: 'diamond', bgClass: 'purple-header'},
    { name: 'Art, Quality Per Art Piece', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Luxury Goods'},
    { name: 'Art, Precious Per Art Piece', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'success', hideItem:false, category: 'Luxury Goods'},
    { name: 'Bacta, 1 Liter Per KG', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Luxury Goods'},
    { name: 'Gems, Semiprecious Per Gram', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Luxury Goods'},
    { name: 'Gems, Precious Per Gram', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Luxury Goods'},
    { name: 'Gems, Exotic Per Gram', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'success', hideItem:false, category: 'Luxury Goods'},
    { name: 'Holovid Per Video', basePrice: 10.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Luxury Goods'},
    { name: 'Metal, Processed Common Per Ton', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Industrial Goods', icon: 'construction', bgClass: 'lt-purple-header'},
    { name: 'Metal, Processed Semiprecious Per KG', basePrice: 150.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Industrial Goods'},
    { name: 'Metal, Processed Precious Per KG', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'success', hideItem:false, category: 'Industrial Goods'},
    { name: 'Ore, Common Per Ton', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Industrial Goods'},
    { name: 'Ore, Semiprecious Per KG', basePrice: 150.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Industrial Goods'},
    { name: 'Ore, Precious Per KG', basePrice: 7500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 ,
      colorClass: 'success', hideItem:false, category: 'Industrial Goods'},
    { name: 'Manufactured Goods, Common Per KG', basePrice: 2250.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Industrial Goods'},
    { name: 'Manufactured Goods, Industrial Per KG', basePrice: 3500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Industrial Goods'},
    { name: 'Manufactured Goods, Military Per KG', basePrice: 5000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Industrial Goods'},
    { name: 'Manufactured Goods, Agricultural Per KG', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'warning', hideItem:false, category: 'Industrial Goods'},
    { name: 'Food, Common Per KG', basePrice: 10.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Food and Fuel', icon: 'fastfood', bgClass: 'green-header'},
    { name: 'Food, Quality Per KG', basePrice: 20.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'danger', hideItem:false, category: 'Food and Fuel'},
    { name: 'Food, Exotic Per KG', basePrice: 50.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'success', hideItem:false, category: 'Food and Fuel'},
    { name: 'Fuel, 1 Liter Per KG', basePrice: 50.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Food and Fuel'},
    { name: 'Water, 1 Liter Per KG', basePrice: 1.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'primary', hideItem:false, category: 'Food and Fuel'},
    { name: 'Spice, Common Per KG', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods', icon: 'dangerous', bgClass: 'red-header'},
    { name: 'Spice, Exotic Per Gram', basePrice: 20.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
    { name: 'Slave, Common Per Slave', basePrice: 500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
    { name: 'Slave, Experienced Per Slave', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
    { name: 'Slave, Military Per Slave', basePrice: 2000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
    { name: 'Weapons, Common Per Ton', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
    { name: 'Weapons, Illegal Per Ton', basePrice: 20000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0,
      colorClass: 'light', hideItem:false, category: 'Illegal Goods'},
  ];

  calculateAdjustedPrices() {
    this.timestamp = new Date();
    this.commodities.forEach((commodity) => {
      commodity.supplyFactor = this.getRandomFactor();
      commodity.demandFactor = this.getRandomFactor();
      commodity.eventFactor = this.getRandomFactor();

      //const priceFactors = (1 + commodity.supplyFactor + commodity.demandFactor + commodity.eventFactor);
      //console.log(commodity.name + 'priceFactors = ' + priceFactors + ", commodity.basePrice = " + commodity.basePrice);
      // Adjusted Price Calculation
      const priceFactors = 1 + commodity.supplyFactor + commodity.demandFactor + commodity.eventFactor;
      //commodity.adjustedPrice = commodity.basePrice * priceFactors;

      commodity.adjustedPrice = commodity.basePrice * priceFactors;
    });

    // Update the URL
    this.updateUrl();

    // Make the HTTP POST request  -- Connects to PHP file
   /* this.postService
      .calculateAdjustedPrices({ commodities: this.commodities })
      .subscribe(
        (response) => {
          console.log('Server response:', response);
          // Handle the response as needed
        },
        (error) => {
          console.error('Error:', error);
          // Handle errors
        }
      );*/
  }

  copyUrlToClipboard() {
    this.clipboard.copy( this.readOnlyURL);
  }

  private getRandomFactor(): number {
    return Math.random() * 0.6 - 0.3; // Generates a random number between -0.3 and 0.3
  }

  updateUrl() {
    /*const queryParams = {
      commodities: JSON.stringify(this.commodities),
      timestamp: this.timestamp,
      ro: this.ro
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });*/

    //this.readOnlyURL = this.router.serializeUrl(this.router.createUrlTree([], {
    let readOnlyUrlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: {
        commodities: JSON.stringify(this.commodities),
        timestamp: this.timestamp,
        ro: 1,
      },
    });

   // this.urlWithParams = this.router.serializeUrl(this.router.createUrlTree([], {
    let urlWithParamsTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: {
        commodities: JSON.stringify(this.commodities),
        timestamp: this.timestamp,
        ro: this.ro,
      },
    });

    this.readOnlyURL = this.router.serializeUrl(readOnlyUrlTree);
    this.urlWithParams = this.router.serializeUrl(urlWithParamsTree);

    // Remove the leading '/?' from the URLs
    if (this.readOnlyURL.startsWith('/?')) {
      this.readOnlyURL = this.readOnlyURL.substring(2);
    }

    if (this.urlWithParams.startsWith('/?')) {
      this.urlWithParams = this.urlWithParams.substring(2);
    }

    /*this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        commodities: JSON.stringify(this.commodities),
        timestamp: this.timestamp,
        ro: this.ro,
      },
      queryParamsHandling: 'merge',
    });*/

  }

  hideCommodity(param: any){

    if(param.hideItem){
      param.hideItem = false;
    }else{
      param.hideItem = true;
    }
    //console.log("hideCommodity param.hideItem = " + param.hideItem);
    this.updateUrl();
  }

  adjustPrices() {
    console.log("adjustPrices called");
    for (let commodity of this.commodities) {
      //commodity.adjustedPrice = commodity.basePrice * commodity.supplyFactor * commodity.demandFactor * commodity.eventFactor;
      const priceFactors = 1 + commodity.supplyFactor + commodity.demandFactor + commodity.eventFactor;
      commodity.adjustedPrice = commodity.basePrice * priceFactors;
    }
    this.updateUrl();
  }
  //id: string = '';

  loadFromQueryString() {
    try {
      const queryParams = new URLSearchParams(this.queryString);
      const commoditiesParam = queryParams.get('commodities');
      //console.log("queryParams = " + queryParams);
      if (commoditiesParam) {
        this.commodities = JSON.parse(commoditiesParam);
      }

      const timestampParam = queryParams.get('timestamp');
      if (timestampParam) {
        this.timestamp = new Date(timestampParam);
      }

      const ro = queryParams.get('ro');
      if (ro) {
        this.ro = JSON.parse(ro);
        this.readOnly = this.ro == 1 ? true : false;
      }

      // Update the URL
      this.updateUrl();
    } catch (error) {
      console.error('Error parsing query string:', error);
    }

    //this.postService.getCommoditiesByQueryString()
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['commodities']) {
        this.commodities = JSON.parse(params['commodities']);
        this.timestamp = new Date(params['timestamp']);
        this.ro = JSON.parse(params['ro']);
        this.readOnly = this.ro == 1 ? true : false;
      }

      this.urlWithParams = this.router.serializeUrl(this.router.createUrlTree([], {
        relativeTo: this.route,
        queryParams: {
          commodities: JSON.stringify(this.commodities),
          timestamp: this.timestamp,
          ro: this.ro,
        },
      }));

      this.readOnlyURL = this.router.serializeUrl(this.router.createUrlTree([], {
        relativeTo: this.route,
        queryParams: {
          commodities: JSON.stringify(this.commodities),
          timestamp: this.timestamp,
          ro: 1,
        },
      }));

      console.log('params = ' + params['commodities']);

    });
  }

}

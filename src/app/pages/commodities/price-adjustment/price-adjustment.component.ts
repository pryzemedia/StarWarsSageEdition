import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CardHeaderComponent} from "../../../components/reusable/card-header/card-header.component";

interface Commodity {
  name: string;
  basePrice: number;
  supplyFactor: number;
  demandFactor: number;
  eventFactor: number;
  adjustedPrice: number;
}

@Component({
  selector: 'app-price-adjustment',
  standalone: true,
  imports: [CommonModule, FormsModule, CardHeaderComponent],
  templateUrl: './price-adjustment.component.html',
  styleUrls: ['./price-adjustment.component.css']
})
export class PriceAdjustmentComponent {

  timestamp: Date | null = null;

  /*basePrices = {
    commonAnimalPerAnimal: 100.00,
    exoticAnimalPerAnimal: 2000.00,
    livestockAnimalPerAnimal: 500,
    commonArtPerPiece: 100.00,
    qualityArtPerPiece: 1000.00,
    preciousArtPerPiece: 10000.00,
    bactaPerKG: 100.00,
    commonFoodPerKG: 10.00,
    qualityFoodPerKG: 20.00,
    exoticFoodPerKG: 50.00,
    semiGemPerGram: 100.00,
    preciousGemPerGram: 1000.00,
    exoticGemPerGram: 10000.00,
    holovidPerVideo: 10.0,
    metalCommonPerTon: 2500.00,
    metalSemiPerKG: 200.00,
    metalPreciousPerKG:10000.00,
    fuelPerLiter: 50.00,
    oreCommonPerTon: 1500.00,
    oreSemiPerKG: 150.0,
    orePreciousPerKG: 7500.00,
    goodsPerKG: 2250.00
  };

  adjustedPrices = {
    commonAnimalPerAnimal: 0,
    exoticAnimalPerAnimal: 0,
    livestockAnimalPerAnimal: 0,
    commonArtPerPiece: 0,
    qualityArtPerPiece: 0,
    preciousArtPerPiece: 0,
    bactaPerKG: 0,
    commonFoodPerKG: 0,
    qualityFoodPerKG:0,
    exoticFoodPerKG: 0,
    semiGemPerGram: 0,
    exoticGemPerGram: 0,
    holovidPerVideo: 0,
    metalCommonPerTon: 0,
    metalSemiPerKG: 0,
    metalPreciousPerKG:0,
    preciousGemPerGram: 0,
    fuelPerLiter: 0,
    oreCommonPerTon: 0,
    oreSemiPerKG: 0,
    orePreciousPerKG: 0,
    goodsPerKG: 0
  };*/

  commodities: Commodity[] = [
    { name: 'Animal, Common Per Animal', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Animal, Exotic Per Animal', basePrice: 2000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Animal, Livestock Per Animal', basePrice: 500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Art, Common Per Art Piece', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Art, Quality Per Art Piece', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Art, Precious Per Art Piece', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Bacta, 1 Liter Per KG', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Gems, Semiprecious Per Gram', basePrice: 100.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Gems, Precious Per Gram', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Gems, Exotic Per Gram', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Holovid Per Video', basePrice: 10.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Metal, Processed Common Per Ton', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Metal, Processed Semiprecious Per KG', basePrice: 150.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Metal, Processed Precious Per KG', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Ore, Common Per Ton', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Ore, Semiprecious Per KG', basePrice: 150.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Ore, Precious Per KG', basePrice: 7500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Manufactured Goods, Common Per KG', basePrice: 2250.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Manufactured Goods, Industrial Per KG', basePrice: 3500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Manufactured Goods, Military Per KG', basePrice: 5000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Manufactured Goods, Agricultural Per KG', basePrice: 1500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Water, 1 Liter Per KG', basePrice: 1.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Spice, Common Per KG', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Spice, Exotic Per Gram', basePrice: 20.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Slave, Common Per Slave', basePrice: 500.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Slave, Experienced Per Slave', basePrice: 1000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Slave, Military Per Slave', basePrice: 2000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Weapons, Common Per Ton', basePrice: 10000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
    { name: 'Weapons, Illegal Per Ton', basePrice: 20000.0, supplyFactor: 0, demandFactor: 0, eventFactor: 0, adjustedPrice: 0 },
  ];

  calculateAdjustedPrices() {
    this.timestamp = new Date();
    this.commodities.forEach((commodity) => {
      commodity.supplyFactor = this.getRandomFactor();
      commodity.demandFactor = this.getRandomFactor();
      commodity.eventFactor = this.getRandomFactor();

      // Adjusted Price Calculation
      const priceFactors = 1 + commodity.supplyFactor + commodity.demandFactor + commodity.eventFactor;
      commodity.adjustedPrice = commodity.basePrice * priceFactors;
    });
   /* this.adjustedPrices.commonAnimalPerAnimal = this.calculateAdjustedPrice(this.basePrices.commonAnimalPerAnimal);
    this.adjustedPrices.exoticAnimalPerAnimal = this.calculateAdjustedPrice(this.basePrices.exoticAnimalPerAnimal);
    this.adjustedPrices.livestockAnimalPerAnimal = this.calculateAdjustedPrice(this.basePrices.livestockAnimalPerAnimal);
    this.adjustedPrices.commonArtPerPiece = this.calculateAdjustedPrice(this.basePrices.commonArtPerPiece);
    this.adjustedPrices.qualityArtPerPiece = this.calculateAdjustedPrice(this.basePrices.qualityArtPerPiece);
    this.adjustedPrices.preciousArtPerPiece = this.calculateAdjustedPrice(this.basePrices.preciousArtPerPiece);
    this.adjustedPrices.bactaPerKG = this.calculateAdjustedPrice(this.basePrices.bactaPerKG);
    this.adjustedPrices.commonFoodPerKG = this.calculateAdjustedPrice(this.basePrices.commonFoodPerKG);
    this.adjustedPrices.qualityFoodPerKG = this.calculateAdjustedPrice(this.basePrices.qualityFoodPerKG);
    this.adjustedPrices.exoticFoodPerKG = this.calculateAdjustedPrice(this.basePrices.exoticFoodPerKG);
    this.adjustedPrices.fuelPerLiter = this.calculateAdjustedPrice(this.basePrices.fuelPerLiter);
    this.adjustedPrices.semiGemPerGram = this.calculateAdjustedPrice(this.basePrices.semiGemPerGram);
    this.adjustedPrices.exoticGemPerGram = this.calculateAdjustedPrice(this.basePrices.exoticGemPerGram);
    this.adjustedPrices.preciousGemPerGram = this.calculateAdjustedPrice(this.basePrices.preciousGemPerGram);
    this.adjustedPrices.holovidPerVideo = this.calculateAdjustedPrice(this.basePrices.holovidPerVideo);
    this.adjustedPrices.metalCommonPerTon = this.calculateAdjustedPrice(this.basePrices.metalCommonPerTon);
    this.adjustedPrices.metalSemiPerKG = this.calculateAdjustedPrice(this.basePrices.metalSemiPerKG);
    this.adjustedPrices.metalPreciousPerKG = this.calculateAdjustedPrice(this.basePrices.metalPreciousPerKG);
    this.adjustedPrices.oreCommonPerTon = this.calculateAdjustedPrice(this.basePrices.oreCommonPerTon);
    this.adjustedPrices.oreSemiPerKG = this.calculateAdjustedPrice(this.basePrices.oreSemiPerKG);
    this.adjustedPrices.orePreciousPerKG = this.calculateAdjustedPrice(this.basePrices.orePreciousPerKG);
    this.adjustedPrices.goodsPerKG = this.calculateAdjustedPrice(this.basePrices.goodsPerKG);*/
  }

  /*private calculateAdjustedPrice(basePrice: number): number {
    const supplyFactor = this.getRandomFactor();
    const demandFactor = this.getRandomFactor();
    const eventFactor = this.getRandomFactor();

    const adjustmentPercentage = (supplyFactor + demandFactor + eventFactor) / 3;
    const adjustedPrice = basePrice * (1 + adjustmentPercentage);

    return parseFloat(adjustedPrice.toFixed(2));
  }*/

  private getRandomFactor(): number {
    // Generate a random number between -0.5 and 0.5
    return (Math.random() * 1.0) - .5;
  }
}

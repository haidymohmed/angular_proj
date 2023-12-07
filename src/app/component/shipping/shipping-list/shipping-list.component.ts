import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.css']
})
export class ShippingListComponent implements OnInit {

  constructor() { }
  ingredients : Ingredient[] = [];

  ngOnInit(): void {
  }
  
  onAddItem(ingredient : Ingredient){
    this.ingredients.push(ingredient)
  }
}

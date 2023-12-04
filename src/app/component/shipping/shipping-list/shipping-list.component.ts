import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.css']
})
export class ShippingListComponent implements OnInit {

  constructor() { }
  ingredients : Ingredient[] = [
    new Ingredient("Panana" , 65),
    new Ingredient("Apples" , 23),
    new Ingredient("Tomatos" , 32),
    new Ingredient("Orange" , 92),
  ];
  ngOnInit(): void {
  }

}

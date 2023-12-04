import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe : Recipe = new Recipe("Potato" , "test desaiption" , "https://www.eatingwell.com/thmb/WfLcIPyHK6yrl8lohvlLCvTKi_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg");

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output('returnSelected') selecteRecipe = new EventEmitter<Recipe> ;
  recipes : Recipe[] = [
    new Recipe("Potato" , "test desaiption" , "https://www.eatingwell.com/thmb/WfLcIPyHK6yrl8lohvlLCvTKi_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg"),
    new Recipe("Milk" , "test desaiption" , "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"),
    new Recipe("Potato" , "test desaiption" , "https://www.eatingwell.com/thmb/WfLcIPyHK6yrl8lohvlLCvTKi_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg"),
    new Recipe("Milk" , "test " , "https://www.eatingwell.com/thmb/WfLcIPyHK6yrl8lohvlLCvTKi_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg"),
  ];
  constructor() { }

  select(selected : Recipe){
    this.selecteRecipe.emit(selected);
    console.log(selected);
  }

  ngOnInit(): void {
  }

}

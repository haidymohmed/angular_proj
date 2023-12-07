import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe ;
  
  constructor() { }

  ngOnInit(): void {
  }

}

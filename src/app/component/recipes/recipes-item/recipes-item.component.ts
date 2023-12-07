import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe : Recipe;

  @Output('selecteRecipe') selecteRecipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  selecteCurrentRecipe(){
    this.selecteRecipe.emit();
  }
}

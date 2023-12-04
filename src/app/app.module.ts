import { RecipesDetailsComponent } from './component/recipes/recipes-details/recipes-details.component';
import { ShippingEditComponent } from './component/shipping/shipping-edit/shipping-edit.component';
import { ShippingListComponent } from './component/shipping/shipping-list/shipping-list.component';
import { RecipesItemComponent } from './component/recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './component/recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './component/recipes/recipes/recipes.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShippingEditComponent,
    ShippingListComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

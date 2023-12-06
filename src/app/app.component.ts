import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature = 'Recipe';

  selectFeature(feature : string){
    console.log("TEST"  + feature);
    
    this.feature = feature;
  }
}

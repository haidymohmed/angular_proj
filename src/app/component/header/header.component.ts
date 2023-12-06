import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output('selectFeature') selectFeature = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelectFeature(feature : string){
    this.selectFeature.emit(feature);
    console.log(feature);
    
  }

}

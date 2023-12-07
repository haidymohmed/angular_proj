import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shipping-edit',
  templateUrl: './shipping-edit.component.html',
  styleUrls: ['./shipping-edit.component.css']
})
export class ShippingEditComponent implements OnInit {

  @Output('addItem') addItemEmitter = new EventEmitter<Ingredient>() ;
  @ViewChild('nameInput' , {static : false}) nameInputRef : ElementRef ;
  @ViewChild('amountInput' , {static : false}) amountInputRef : ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    if(this.nameInputRef.nativeElement.value != '' && this.amountInputRef.nativeElement.value != ''){
      this.addItemEmitter.emit(new Ingredient(
        this.nameInputRef.nativeElement.value ,
        this.amountInputRef.nativeElement.value 
      ));
    }
  }
  onDeleteItem(){

  }
  onClearItem(){
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
  
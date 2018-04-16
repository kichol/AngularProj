import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { Ingredient } from 'app/shared/ingredient.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
//  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService : ShoppingListService) { }

  onAddItem(nameInput:HTMLInputElement,amountInput:HTMLInputElement){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName,ingredientAmount);
   // this.ingredientAdded.emit(newIngredient);
   this.slService.addIngredient(newIngredient);
  }
 
    //   this.ingredientAdded.emit( new Ingredient(nameInput.value,amountInput.value)
  

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe','This is something for test','favicon.ico'),
    new Recipe('Laddu','This is something for Laddu','favicon.ico'),
    new Recipe('Chicken Gravey','This is something for Chicken Gravy','favicon.ico')
  ];

  constructor() { }

  ngOnInit() {
  }

}

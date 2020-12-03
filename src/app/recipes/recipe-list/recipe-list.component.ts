import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('TACO', 'MEXICAN FOOD', 'https://media.globalcitizen.org/4d/08/4d080f57-5b38-4358-ab44-ce1796f482d6/beyond_beef.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

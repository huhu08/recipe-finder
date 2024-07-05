import { Component, OnInit } from '@angular/core';
import { Meal} from '../meal';
import { MealService } from '../meal.service';
// import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  
  ngOnInit(): void {

  }

  meals: Meal[] = [];
  data:any;
  constructor(private mealService:MealService) { }
 search(){
    // this.mealService.getMeal(meal).subscribe(
    //   meal => this.meal=meal
    // );
  this.mealService.getMeals().subscribe(data => {
    this.meals = data;
    console.log(data);
  });
  }

}

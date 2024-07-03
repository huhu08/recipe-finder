import { Component} from '@angular/core';
import { Meal} from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  //meal:Meal |undefined;

  meals: Meal[] = [];
  data:any;
  constructor(private mealService:MealService) { }
 search(){
  //   this.mealService.getMeal(meal).subscribe(
  //     meal => this.meal=meal
  //   );
  this.mealService.getMeals().subscribe(data => {
    this.meals = data;
    console.log(data);
  });
  }
 

}

import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meal,MealResponse } from './meal';
@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }
  private ApiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=";
  
  // getMeal(meal:string):Observable<Meal>{
  // return this.http.get<Meal>(this.ApiUrl+meal);
  //   console.log();
  // }
  // 
  getMeals(): Observable<Meal[]> {
    return this.http.get<MealResponse>(this.ApiUrl).pipe(
      map(response => response.meals)
    );
  }
}

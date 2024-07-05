import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Meal,MealResponse } from './meal';
@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }
  private ApiUrl="www.themealdb.com/api/json/v1/1/list.php?c=list";
  
  // getMeal(meal:string):Observable<Meal>{
  // return this.http.get<Meal>(this.ApiUrl+meal);
  //   console.log();
  // }
  // 
  getMeals(): Observable<Meal[]> {
    return this.http.get<MealResponse>(this.ApiUrl).pipe(
      map(Response => Response.meals)
      ,catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}

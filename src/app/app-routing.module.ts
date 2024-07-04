import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { MealComponent } from './meal/meal.component';

const routes:Routes=[
  {path:'meal',component:MealComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

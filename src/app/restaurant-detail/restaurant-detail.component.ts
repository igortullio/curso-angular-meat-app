import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurants/restaurant.service";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-restaurant-datail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}

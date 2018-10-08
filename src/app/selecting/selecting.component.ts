import { Component, OnInit } from '@angular/core';
// import { GetrestaurantsService } from '../getrestaurants.service';
import { flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {AddtofavouritesService} from '../addtofavourites.service';
import { log } from 'util';
import { of } from 'rxjs';
@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.css'],
  providers: []
})
export class SelectingComponent implements OnInit {
  restaurant: string;
  cuisine: string;
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res: any = [];
  constructor(private http: HttpClient, private svc: AddtofavouritesService) { }

  ngOnInit() {
  }
  random() {
    

    this.svc.GetFromAPI(this.LIVE_URI,this.restaurant,this.cuisine).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant;
      });
    });
  }
   addToFavourites(res1: any) {
    
  this.svc.PostDataToDB(res1);
  
   }
  }

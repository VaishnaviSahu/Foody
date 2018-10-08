import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {AddtofavouritesService} from '../addtofavourites.service';

@Component({
  selector: 'app-displaycollections',
  templateUrl: './displaycollections.component.html',
  styleUrls: ['./displaycollections.component.css']
})
export class DisplaycollectionsComponent implements OnInit {

  constructor(private httpClient: HttpClient,private svc: AddtofavouritesService) { }
  res: any = [];
  restaurants = [];
  ngOnInit() {}
showFavs() {
    this.svc.showFavs().subscribe((res: any) => {
      this.restaurants = res;
      console.log(this.restaurants);
        });
}

}

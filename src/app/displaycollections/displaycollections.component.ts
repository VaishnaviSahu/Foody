import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-displaycollections',
  templateUrl: './displaycollections.component.html',
  styleUrls: ['./displaycollections.component.css']
})
export class DisplaycollectionsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  res: any = [];
  restaurants = [];

  ngOnInit() {
    }
  showFavs() {
    console.log('called showFavs');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };
    this.httpClient.get('http://localhost:3000/posts').subscribe((val: any) => {
      this.restaurants = val;
      console.log(this.restaurants);
      });
}

showCollectionsfav() {
  console.log('called showfavouriteCollections');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '9afe5ae2561b8091f5118177b4848b35'
    })
  };
    this.httpClient.get('http://localhost:3000/favourites').subscribe((res: any) => {
    this.restaurants = res;
    console.log(this.restaurants);
    });
}
}

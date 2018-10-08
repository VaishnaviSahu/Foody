import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddtofavouritesService {
restaurants: any = [];
  constructor(private http: HttpClient) { }


GetFromAPI(LIVE_URI: string, restaurant: string, cuisine: string) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '9afe5ae2561b8091f5118177b4848b35'
    })
  };
return this.http.get(LIVE_URI + '/search?q=' + restaurant + '&cuisines=' + cuisine,
  httpOptions);
}

PostDataToDB(res1: any) {
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': '9afe5ae2561b8091f5118177b4848b35'
  })
};
this.http.post('http://localhost:3000/favourites', res1).subscribe(data => {
  console.log('POST is successful');
}
);
}
showFavCollections() {
  console.log('called showfavouriteCollections');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '9afe5ae2561b8091f5118177b4848b35'
    })
  };
  return this.http.get('http://localhost:3000/favourites');
}
}

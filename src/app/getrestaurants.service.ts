import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetrestaurantsService {
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  constructor(private httpClient: HttpClient) { }

  getrestaurants(location: string, cuisine: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };
    return this.httpClient.get('https://developers.zomato.com/api/v2.1/search?q=location&cuisines=cuisine', httpOptions);

}
}

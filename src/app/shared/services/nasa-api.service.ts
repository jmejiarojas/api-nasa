import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MarsImage } from '../model/mars-image';

//https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'YCOwNYkDhmsrQ94f7Z87JVnSDPnFUiSTJdUMBVM6'
//const API_KEY = 'DEMO_KEY';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';

@Injectable()
export class NasaApiService {

  constructor(private httpClient: HttpClient) {  }

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(APOD_URL+'?api_key='+API_KEY);
  }

  getMarsImages(camera: string): Observable<any>{
    return this.httpClient.get(MARS_URL+'&camera='+camera+'&api_key='+API_KEY);
  }

}

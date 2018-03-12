import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'YCOwNYkDhmsrQ94f7Z87JVnSDPnFUiSTJdUMBVM6'

@Injectable()
export class NasaApiService {

  constructor(private httpClient: HttpClient) {  }

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(APOD_URL+'?api_key='+API_KEY);
  }

}

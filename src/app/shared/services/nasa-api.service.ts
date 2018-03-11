import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable()
export class NasaApiService {

  private readonly DATA:Apod = {
    title:'Phases of the Moon',
    date:'2011-07-08',
    explanation:'Look at the Moon every night and its visible sunlit portion gradually changes. In phases progressing from New Moon to Full Moon to New Moon again, a lunar cycle or lunation is completed in about 29.5 days. Top left to bottom right.',
    url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    hdurl:'',
    media_type:'image',
    service_version:'v1'
  };

  constructor() { }

  getApod(): Apod {
    return this.DATA;
  }

}

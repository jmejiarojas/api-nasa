import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;

  constructor() { }

  ngOnInit() {
    this.apod={
      title:'Phases of the Moon',
      date:'2018 March 10',
      explanation:'Look at the Moon every night and its visible sunlit portion gradually changes. In phases progressing from New Moon to Full Moon to New Moon again, a lunar cycle or lunation is completed in about 29.5 days. Top left to bottom right.',
      url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      hdurl:'',
      media_type:'image',
      service_version:'v1'
    }
  }

}

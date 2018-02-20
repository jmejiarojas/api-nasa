import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent implements OnInit {

  name: string;

  constructor() {
    this.name = "Julio Mejia";
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre : 'Julito'
  }

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.usuario.nombre = 'Miguel';
    } ,5000);
  }

}

import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../../shared/model/mars-image';
import { NasaApiService } from '../../shared/services/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  cameras: string[] = ['FHAZ','RHAZ','MAST','CHEMCAM'];
  currentCamera: string;

  constructor(private apiNasaService: NasaApiService) { }

  ngOnInit() {
    this.currentCamera=this.cameras[0];
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string){
    this.refreshView(camera);
  }

  private refreshView(camera: string){
    this.apiNasaService.getMarsImages(camera)
    .subscribe((result) => {
      this.marsImages = result.photos;
    });
  } 
  
}

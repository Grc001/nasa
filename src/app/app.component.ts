import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasaQuestAngular';
  
PickOfTheDay: string = ""

  constructor(public pictureService: NasaService) {}
  
  ngOnInit(): void {
   this.pictureService.getImageOfTheDay().subscribe( pictureUrl => {
     this.PickOfTheDay = pictureUrl.url;
   });
 }
 }

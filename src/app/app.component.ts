import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  concepts:any = []

  catchParams(concepts:any){
    this.concepts = concepts;
  }

}

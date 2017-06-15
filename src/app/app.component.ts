import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleClass = '';

  myObject = {
    name: 'Gian',
    age: 25
  };
  myArray = ['Gian', 'Karla', 'Mary'];
  //myArray = false;
  buttonStatus = true;

  myEvent(event){
    this.titleClass = 'red-title';
    console.log(event);
  }

  myOtherEvent(event){
    this.titleClass = 'green-title';
    console.log(event);
  }

  constructor(private dataService:DataService){ 
  }
  someProperty: string = '';

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }
  

}

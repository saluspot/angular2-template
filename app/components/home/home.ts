import { ChartistComponent } from 'angular2-chartist';
import {Component} from "@angular/core"


@Component({
  selector: "app",
  template : `
  <h1>Mi app</h1>
  <chartist
     [data]="data"
     [type]="type"
     [options]="options"
     >
   </chartist>
  `,
  directives:[ChartistComponent]
})
export class Home {
  data:any;
  type:any;
  options:any
  constructor(){
    this.data =  {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      }
    this.type = "Line"
    this.options = null
  }
}

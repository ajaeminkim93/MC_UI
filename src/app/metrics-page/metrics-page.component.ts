
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics-page.component.html',
  styleUrls: ['./metrics-page.component.scss']
})
export class MetricsPageComponent implements OnInit {
toggleMetrics=false;


  constructor() { }
    toggleButton(){
      this.toggleMetrics=!this.toggleMetrics;
    }
  ngOnInit() {
  }

}
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { chart } from 'highcharts';

import * as Highcharts from 'highcharts';

import { ApiService } from 'src/app/api.service';

import { style, color } from '../../../node_modules/@types/d3';

@Component({

  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
}
}
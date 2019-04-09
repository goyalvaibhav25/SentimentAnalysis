import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/api.service';
import { style, color } from '../../../node_modules/@types/d3';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-live-graph',
  templateUrl: './live-graph.component.html',
  styleUrls: ['./live-graph.component.css']
})

export class LiveGraphComponent implements OnInit {
  
  month = ["abc"];
  price = ["123"];
  chart = [];
  public text1:string[]=Array();
  @ViewChild('chartline') chartline: ElementRef;
  linechart: Highcharts.ChartObject;
  public dataArray:string[]=Array();
  public numDataArray:number[]=Array();
  graphData: any;
  stringArray:any[];
  jsonData:any;
  graphValue:any;
  data: any;
  array1: number[]=[];
  abc:number;

  constructor(private api: HttpClient) { }
  ngOnInit() {
    this.numDataArray.push(1);
    this.numDataArray.push(2);
    this.numDataArray.push(2);
    this.numDataArray.push(4);
    this.numDataArray.push(6);
    
    
    var array2:any;
    this.api.get("http://localhost:8080/posts/").subscribe((res:any)=>{
     array2=res;
     console.log(array2);
     for(let i=0;i<array2.length;i++){ 
      this.text1.push(array2[i].sentiments);
     } 
     console.log(this.text1);
     for(let j=0;j<this.text1.length;j++){
    
      this.numDataArray.push(Math.ceil(parseFloat(this.text1[j])*10));
      
      console.log(this.numDataArray);
     }
     });
    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: this.month,
    //     datasets: [
    //       {
    //         data: this.price,
    //         borderColor: '#3cba9f',
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }

ngAfterViewInit() {
  
  const lines: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Live Analysis',
      style: {
        color: '#3781C2',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold'
      }

    },
    xAxis: {
      title: {
        text: 'Time', style: { fontWeight: 'bold', fontFamily: 'TimesNewRoman' }
      }
      , categories: ['1min', '2min', '3min', '4min']
    },
    yAxis: {
      title: {
        text: 'Count of emotions', style: { fontWeight: 'bold', fontFamily: 'TimesNewRoman' }
      }
    },

    series: [{
      name: 'Sentiments',
      data: this.numDataArray, color: '#FFBB33'
    }]
  };
    this.linechart = chart(this.chartline.nativeElement, lines);

  // this.apiService.getGraphData().subscribe((res: any) => {
  //   this.graphData = res;
  //   //console.log(JSON.stringify(this.graphData));
  //   this.jsonData = JSON.stringify(this.graphData);
  //   this.stringArray = this.jsonData.split(" ");
  //   //console.log(this.stringArray);
  //   this.graphValue=this.stringArray[10];
  //  // console.log(this.graphValue);
  //   this.data=Number(this.graphValue.split(""));
  //  // console.log(typeof this.data); 
  //   this.array1.push(this.data);
  //   console.log(this.array1);
  //   this.array1.push(10);
  //   this.array1.push(2);
  //   this.array1.push(3);
  // },
  // err => {
  //   console.log(err);
  // });
  // console.log(this.array1);
  //   const columnOptions: Highcharts.Options = {
  //     chart: {
  //       type: 'column'
  //     },
  //     title: {
  //       text: 'SENTIMENTS OF ON-GOING CALL',
  //       style: {
  //         color: '#3781C2',
  //         fontWeight: 'bold',
  //         fontFamily: 'TimesNewRoman'
  //       }
  //     },
  //     xAxis: {
  //       categories: ['Emotion']
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'COUNT',
  //         style: { fontWeight: 'bold', fontFamily: 'TimesNewRoman' }
  //       }
  //     },
  //     series: [{
  //       name: 'Happy',
  //       data:  this.array1,
  //       color: 'green'
  //     },
  //     {
  //       name: 'SAD',
  //       data: this.array1,
  //       color: 'black'
  //     },
  //     {
  //       name: 'ANGRY',
  //       data: [7],
  //       color: 'red'
  //     },
  //     {
  //       name: 'NONE',
  //       data: [2],
  //       color: 'gray'
  //     }]
  //   };
  //   this.columnChart = chart(this.chartColumn.nativeElement, columnOptions);
   }
}
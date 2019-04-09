import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { urlList } from 'src/assets/config/properties';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({

  selector: 'app-live-chat',

  templateUrl: './live-chat.component.html',

  styleUrls: ['./live-chat.component.css']

})

export class LiveChatComponent implements OnInit {
  @ViewChild('123') myId: ElementRef;
  viewChat:boolean=false;
  public displayList:any[];
  keywords:any;
  public text1:string[]=Array();
  xyz:any;
  ar=[1,2,3,4,5];
  constructor(private api : HttpClient) {
    
   }

  ngOnInit() {
    
  }

  display(){
    var counter=0;
    var that=this;
    var array1: any;
    setInterval(function(){
      // this.getData();
       that.api.get("http://localhost:8080/posts/5ca7288fc17c60a4081857c1").subscribe((res)=>{
       this.array1=res;
       console.log(this.array1.text);
       console.log(res);
       });
      counter++;
     console.log(counter);
    },3000);

    
   
  };

  display1(){
    document.getElementById("id");
    var array2:any;
    
    var that=this;
    this.api.get("http://localhost:8080/posts/").subscribe((res:any)=>{
       array2=res;
      //  res.array.forEach(element => {
      //     that.displayList.push(element);
      //  });
       console.log(array2);
       for(let i=0;i<array2.length;i++){ 
        this.text1.push(array2[i].text);
       }
      
       console.log(this.text1);
       //console.log(that.displayList);
       //this.xyz=array2.text;
      //  for(let i=0;i<=array2.length;i++){
      //   displayList.push(array2[i]);
      //   console.log(displayList);
      //  }
       });
      }
      
  
    // this.api.setInterval().subscribe((res: any) => {
    //   this.keywords = res;
    //   console.log(JSON.stringify(this.keywords));
    // });
//     setInterval(function(){
//       // this.getData();
//       api.get<any>("http://localhost:8080/posts/5ca7288fc17c60a4081857c1");
//      },3000);

//     this.xyz=this.keywords.text;
//  }

}
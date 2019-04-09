import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
//import { Service1 } from 'src/app/service1';
import { Article } from './article';
import { urlList } from 'src/assets/config/properties';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/operator/takeWhile';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})

export class KeywordComponent implements OnInit {
  // keywords: any;
  // dataList : string;
  // stringArray:any[];
  // newString : string;
  errorMessage: string;
  textId: string;
  keywords: string;
  data: any;
  finalList: any[];
  public viewKeywords: boolean = false;
  listUrl: Array<string> = ["abc", "123", "Bill", "def"];
  
  public displayList:any[];
  //keywords:any;
  public text1:string[]=Array();
  public text2:string[]=Array();
  public splittedArr:string;

  constructor(private api: HttpClient) {
    this.keywords = null;
    this.errorMessage = null;
    this.textId = null;
   
    // let article: Article = {
    //   "documents": [
    //     {
    //       "language": "en",
    //       "id": "1",
    //       "text": "We are participating in Global Hackathon 2019"
    //     },
    //   ]
    // };
   
    // setTimeout(function () {
    //   this.apiService.getData().subscribe((res: any) => {

    //       this.keywords = JSON.stringify(res);
    
    //       console.log(this.keywords);
    //      })
    // }, 1000);
 
  }

  checkValue() {
    for (let i = 0; i <= this.listUrl.length; i++) {
      for (let j = 0; j <= i; j++) {
        if (this.listUrl[i] == urlList[j].keyword) {
          window.open(urlList[j].url, "_blank");
        }
      }
    }
    console.log("not found");
  }

  ngOnInit(): void {
 
    
  // this.api.getData().subscribe((res: any) => {

  //   this.keywords = JSON.stringify(res);

  //   console.log(this.keywords);
  // });
    //   // Make the HTTP request:
  //   setInterval(function(){
  //   get_data();
  // },1000);
  // setTimeout(function(){
  //   this.api.getData("https://jsonplaceholder.typicode.com/todos/1").map((res:Response)=> res.json());
  // },2000);


// get_data(){
//   this.client.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
//       console.log(data);
//       this.keywords=JSON.stringify(data);
//       console.log(typeof(this.keywords));
//     });
//}


}

display1(){
  this.viewKeywords=true;
  document.getElementById("id");
  var array2:any;
  var abc:string;
  var that=this;
  this.api.get("http://localhost:8080/posts/").subscribe((res:any)=>{
     array2=res;
    //  res.array.forEach(element => {
    //     that.displayList.push(element);
    //  });
     console.log(array2);
     for(let i=0;i<array2.length;i++){ 
      this.text1.push(array2[i].keywords);
     }
    //  for(let j=0;j<this.text1.length;j++){
    //    if(this.text1[j]==','){
    //      console.log("encountered");
    //    }
    //    else{
    //      abc=this.text1[j];
    //     console.log(abc.split(","));
    //     //for(let k=0;j<)
    //    //  this.text2.push( );
    //    }
    //  }
    
     console.log(this.text1);
    // console.log(this.text2);
     //console.log(that.displayList);
     //this.xyz=array2.text;
    //  for(let i=0;i<=array2.length;i++){
    //   displayList.push(array2[i]);
    //   console.log(displayList);
    //  }
     });
    }
// alert(typeof(apiService.getKeywords));
// apiService.getKeywords(article).subscribe(response => {
//   console.log(response);
//   this.keywords = response;
//   this.finalList = this.keywords.documents[0].keyPhrases;
//   console.log(this.finalList);
// }, err => {
//   console.log(err);
// });
// }
    //   err => {

    //     console.log(err);

    //   });



    // this.apiService.getKeywords(this.data).then(response=>
    //   {
    //   console.log(response);
    //   this.keywords=response.documents;
    //   console.log(this.keywords[0]);

    // });
  }

  //   subscribe((res: any) => {

  //     this.keywords = res;

  //     console.log(JSON.stringify(this.keywords));

  //     this.dataList = JSON.stringify(this.keywords);

  //     //this.stringArray = this.dataList.split(" ");

  //     this.newString=this.dataList.replace(/ "id" /g," ");

  //     console.log(this.newString);

  //   },

  //   err => {

  //     console.log(err);

  //   });

  // }
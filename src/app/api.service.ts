import { Injectable } from '@angular/core';

//import { KEYWORDS } from './keyword-data';

//import { Service1 } from './service1';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable,throwError, interval} from 'rxjs';
//import 'rxjs/Rx';
import { map, catchError, tap, retry, timeout, count } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
import { Article } from './keyword/article';


@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {
    

    var counter=0;

    //  setInterval(function(){
    //   // this.getData();
    //   // http.get<any>("http://localhost:8080/posts/5ca7288fc17c60a4081857c1");
    //   counter++;
    //  console.log(counter);
    // },3000);
   };
}

//   private handleError(err: HttpErrorResponse) {
 
//     let errorMessage = '';
//     if (err.error instanceof ErrorEvent) {

//         errorMessage = `An error occurred: ${err.error.message}`;
//     } else {

//         errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
// }

  //getData(): Observable<any> {
   // return this.http.get<any>("http://localhost:8080/posts/5ca7288fc17c60a4081857c1")
    // pipe(timeout(000),
    // catchError(this.handleError));
 // }


  // getKeywords(article: Article): Observable<Article> {
  //   const api: string = "https://westus.api.cognitive.microsoft.com/";
  //   const endPoint: string = "text/analytics/v2.0/keyPhrases";
  //   const url = api + endPoint;

  //   let headers = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     "Accept": "application/json",
  //     "Ocp-Apim-Subscription-Key": "b8832adf5def454d9c621b41b2ed7369"
  //   });
  //   return this.http.post<Article>(url, article, { headers: headers }).pipe(tap(data => console.log(data)));
  // }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyServiceService } from 'src/app/key-service.service';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor( private router : Router,
               private keyService : KeyServiceService ) {
                }

  ngOnInit() {
  }

}

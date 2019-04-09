import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-overall-analysis',

  templateUrl: './overall-analysis.component.html',

  styleUrls: ['./overall-analysis.component.css']

})

export class OverallAnalysisComponent implements OnInit {

 

  constructor() { }

 

  imgValue: String;

  imgSrc: String;

 

  checkValue(value) {

    if (value == "happy") {

      this.imgSrc = 'assets/images/happy.jfif';

    }

    else if (value == "sad") {

      this.imgSrc = 'assets/images/Sad_Face_Emoji_large.png';

    }

    else if (value == "angry") {

      this.imgSrc = 'assets/images/61M-mR-0kIL._SX425_.jpg';

    }

    else {

      this.imgSrc = 'assets/images/images.png';

    }

  }

 

  ngOnInit() {

  }

 

}
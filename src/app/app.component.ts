import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  colNumber = 4;
  rowNumber = 3;
  blockNumber = this.colNumber * this.rowNumber;
  blockNumberArray = [];

  ngOnInit() {
    let sec = document.getElementById("sec1");

    for(let i = 0 ; i < this.blockNumber ; i++) {
      this.blockNumberArray.push(i + 1);
    }
    
    sec.style.gridTemplateColumns = 'repeat(' + this.colNumber + ', 1fr)';
    sec.style.gridTemplateRows = 'repeat(' + this.rowNumber + ', 1fr)';
  }

  reRender() {
    if(this.colNumber > 100) {
      this.colNumber = 100;
    }
    if(this.rowNumber > 100) {
      this.rowNumber = 100;
    }
    this.blockNumber = this.colNumber * this.rowNumber;
    this.blockNumberArray = [];
    this.ngOnInit();
  }

  changeWidth() {
    let sec = document.getElementById("sec1");
    sec.style.width = "90%";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khedma',
  templateUrl: './khedma.component.html',
  styleUrls: ['./khedma.component.scss']
})
export class KhedmaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBarOpen=true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}

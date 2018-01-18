import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgSrc: string;
  imgAlt: string;

  constructor() { }

  ngOnInit() {
    this.imgSrc = '../../../assets/g-dino.png'
    this.imgAlt = 'g-dino logo'
  }

}

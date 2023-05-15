import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
name: string = 'mi banner'
imgUrl1: string = `url('../../../assets/images/banner.png')`
 }

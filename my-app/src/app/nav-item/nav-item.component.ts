import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {
  text:string;
  constructor(t:string){
    this.text = t;
  }
}

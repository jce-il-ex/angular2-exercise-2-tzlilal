import { Component, Input } from '@angular/core';
import { NavItemComponent } from "app/nav-item/nav-item.component";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
 @Input() items : NavItemComponent[]; 
  constructor() {
    this.items = [
      new NavItemComponent("first"),
      new NavItemComponent("second"),
      new NavItemComponent("third"),
      new NavItemComponent("forth")
    ];
  }

}

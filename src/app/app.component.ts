import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  heading = { name: 'My Portfolio' };
  menuItems: MenuItem[];

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
          { name: "Resume", route: "/resume" },
          { name: "UI/UX", route: "/user-interfaces" },
          { name: "Logos", route: "/logo-design" },
          { name: "Media", route: "/media" },
          { name: "Contact", route: "/contact" }
      ];
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
}

export interface MenuItem {
  name: string;
  route: string;
}
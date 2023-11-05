import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let clicky: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        clicky.log(event.urlAfterRedirects);
      }
    });
  }
}


import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
  
   host: {
        '(window:scroll)': 'onScroll($event)'
    }
})
export class NavbarHomeComponent implements OnInit {

    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

   constructor(private translate: TranslateService) {}

    onScroll(evt) {

        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }

    }

   useLanguage(language: string) {
        this.translate.use(language);
    }
  ngOnInit() {
  }

}

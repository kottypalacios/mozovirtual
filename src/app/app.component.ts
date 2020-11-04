import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaObserver, MediaChange } from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'mozovirtual';

  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver : MediaObserver){

  }

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);

      this.deviceXs = result.mqAlias ==='xs' ? true : false;
      });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}

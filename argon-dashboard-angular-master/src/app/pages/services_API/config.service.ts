import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {ROUTES} from 'src/app/components/sidebar/sidebar.component'

@Injectable({
    providedIn: 'root'
  })
  export class ConfigService{
    public location: Location;
    constructor(@Inject(DOCUMENT) private document: Document, location: Location){
      this.location = location;
    }

    public apiUrl = "https://localhost:7244";

}
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationModel } from "src/app/model/authentication.model";
import { ConfigService } from "src/app/pages/services_API/config.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  auth: AuthenticationModel
  
  constructor(location: Location, 
     private element: ElementRef, 
     private router: Router,
     private configService: ConfigService
     ) {
    this.location = location;
  }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem("currentUser"))
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice(1);
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Thông tin chi tiết';
  }

  logOut(){
      localStorage.removeItem("currentUser")
      localStorage.removeItem("token")
      sessionStorage.clear()
      this.auth = null

      // window.location.href = this.configService.clientUrl + "/login";
      location.assign(this.configService.clientUrl + "/login")
    }
}

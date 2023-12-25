import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Thống kê',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/list-banner', title: 'Banner',  icon:'ni ni-image text-purple', class: '' },
    { path: '/list-role', title: 'Chức vụ',  icon:'fa-solid fa-key text-purple', class: '' },
    { path: '/list-employee', title: 'Nhân viên',  icon:'ni ni-circle-08 text-purple', class: '' },
    { path: '/list-customer', title: 'Khách hàng',  icon:'ni ni-single-02 text-purple', class: '' },
    { path: '/list-category', title: 'Danh mục',  icon:'fa-solid fa-list text-purple', class: '' },
    { path: '/list-product', title: 'Sản phẩm',  icon:'fa-solid fa-shirt text-purple', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

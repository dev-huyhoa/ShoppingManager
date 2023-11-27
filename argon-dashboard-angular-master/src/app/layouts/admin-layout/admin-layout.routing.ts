import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ListEmployeeComponent } from 'src/app/pages/employee/list-employee/list-employee.component';
import { ListCustomerComponent } from 'src/app/pages/customer/list-customer/list-customer.component';
import { ItemEmployeeComponent } from 'src/app/pages/employee/item-employee/item-employee/item-employee.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'list-employee',           component: ListEmployeeComponent },
    { path: 'list-customer',  component: ListCustomerComponent },
    { path: 'item-employee/:id',  component: ItemEmployeeComponent }

];

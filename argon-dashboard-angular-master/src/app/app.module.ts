import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { ItemEmployeeComponent } from './pages/employee/item-employee/item-employee/item-employee.component';
import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { CommonModule } from '@angular/common';
import { ListRoleComponent } from './pages/role/list-role/list-role.component';
import { ItemRoleComponent } from './pages/role/item-role/item-role.component';
import { SearchPipe } from './search/search.pipe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemCategoryComponent } from './pages/category/item-category/item-category.component';
import { ListCategoryComponent } from './pages/category/list-category/list-category.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 4000,
      positionClass: 'toast-top-right',
      tapToDismiss: true,
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ListEmployeeComponent,
    ItemEmployeeComponent,
    ListCustomerComponent,
    ListRoleComponent,
    ItemRoleComponent,
    SearchPipe,
    ItemCategoryComponent,
    ListCategoryComponent
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

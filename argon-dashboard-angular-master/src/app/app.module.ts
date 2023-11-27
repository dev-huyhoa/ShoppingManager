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


@NgModule({
  imports: [
    BrowserAnimationsModule,
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
    ItemEmployeeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

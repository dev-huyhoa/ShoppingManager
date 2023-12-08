import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { EmployeeService } from "src/app/pages/services_API/employee.service";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { EmployeeModel} from "src/app/model/employee.model";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { AuthenticationModel } from 'src/app/model/authentication.model';
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

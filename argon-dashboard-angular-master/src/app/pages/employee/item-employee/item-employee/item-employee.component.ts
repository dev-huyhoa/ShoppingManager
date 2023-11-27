import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { NotificationService } from "../../../services_API/notification.service";
import { ConfigService } from "../../../services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { EmployeeModel} from "src/app/model/employee.model";
import { HttpClient } from "@angular/common/http";
import { EmployeeService } from "src/app/pages/services_API/employee.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-employee',
  templateUrl: './item-employee.component.html',
  styleUrls: ['./item-employee.component.scss']
})
export class ItemEmployeeComponent implements OnInit {
  idEmployee: any
  resEmployee: EmployeeModel
  response: ResponseModel

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private employeeService: EmployeeService, private notificationService: NotificationService,
    private configService: ConfigService) { }
  ngOnInit(): void {
    this.idEmployee = this.activatedRoute.snapshot.paramMap.get('id')
    this.getEmployeeById();
  }

  getEmployeeById(){
    
    this.employeeService.getEmployeeById(this.idEmployee).subscribe(
      (res) => {
        this.response = res;

        this.resEmployee = this.response.data;
        console.log(this.resEmployee.nameEmployee,"dataget");

      },
      (error) => {
        // Xử lý lỗi khi không lấy được dữ liệu
      }
    );
  }
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { NotificationService } from "../../../services_API/notification.service";
import { ConfigService } from "../../../services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { EmployeeModel} from "src/app/model/employee.model";
import { RoleModel} from "src/app/model/role.model";

import { HttpClient } from "@angular/common/http";
import { EmployeeService } from "src/app/pages/services_API/employee.service";
import { RoleService } from "src/app/pages/services_API/role.service";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-employee',
  templateUrl: './item-employee.component.html',
  styleUrls: ['./item-employee.component.scss']
})
export class ItemEmployeeComponent implements OnInit {
  idEmployee: any
  resEmployee: EmployeeModel
  resRole: RoleModel[]
  response: ResponseModel

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private employeeService: EmployeeService, private notificationService: NotificationService,
    private configService: ConfigService, private roleService: RoleService) { }
  ngOnInit(): void {
    this.idEmployee = this.activatedRoute.snapshot.paramMap.get('id')
    this.getEmployeeById();
    this.getRole();
    console.log(this.resRole);
    
  }
  
  getRole(){
    this.roleService.gets().subscribe(
      (res) => {
        this.response = res;      
        this.resRole = this.response.data;
        console.log(this.resRole,"role");

      },
      (error) => {
        // Xử lý lỗi khi không lấy được dữ liệu
      }
    );
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

  update(data: any){
    this.employeeService.updateEmployee(data).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
            alert("Sửa thông tin thành công")
        }
        else {
          alert("Thất bại")
        }
      },
      (error) => {
        // Xử lý lỗi khi không lấy được dữ liệu
      }
    );
  }
}

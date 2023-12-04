import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { EmployeeService } from "src/app/pages/services_API/employee.service";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { EmployeeModel} from "src/app/model/employee.model";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { AuthenticationModel } from 'src/app/model/authentication.model';
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  resEmployee: EmployeeModel[]
  response: ResponseModel
  data: EmployeeModel
  searchText = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  constructor(private employeeService: EmployeeService, private router: Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.resEmployee);
    
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resEmployee = this.response.data;
        console.log(this.resEmployee);
      },
      (error) => {
        // Xử lý lỗi khi không lấy được dữ liệu
      }
    );
}

onTableDataChange(event:any){
  this.page = event
  this.getEmployeeData();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value
  this.page = 1
  this.getEmployeeData();
}

}
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
  constructor(private employeeService: EmployeeService, private router: Router) { 
    
  }


  ngOnInit(): void {
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

goToDetails() {
  // Điều hướng tới component chi tiết (điều chỉnh 'details-component' thành đường dẫn và tên component thực tế)
  this.router.navigate(['/details-component']);
}

}
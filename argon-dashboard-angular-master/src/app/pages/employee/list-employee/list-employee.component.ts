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
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resEmployee: EmployeeModel[]
  response: ResponseModel
  data: EmployeeModel
  resEmployeeTemp: EmployeeModel
  searchText : any = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  @ViewChild('myModal') myModal: ElementRef;
  constructor(
    private employeeService: EmployeeService, 
    private router: Router, 
    private toastr: ToastrService,
    private modalService: NgbModal, 
   ) { 
    
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resEmployee = this.response.data;
      },
      (error) => {
        this.toastr.error(error);          
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

delete(){
  this.employeeService.delete(this.resEmployeeTemp.idEmployee).subscribe(
    (res) => {
      this.response = res;
      if (res.success == true) 
      {
        this.toastr.success(res.message);  
        this.getEmployeeData()
        setTimeout(() => {
          this.closeModalDelete.nativeElement.click()
         }, 100);
      }
      else {
        this.toastr.error(res.message);          
      }
    },
    (error) => {
      this.toastr.error(error);          
    }
  );
}

getDataRow(value: any){
  this.resEmployeeTemp = value
  console.log(value);
}
isAction: boolean = false;
closeModal() {

  
}

}
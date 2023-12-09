import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { RoleService } from "src/app/pages/services_API/role.service";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { EmployeeModel} from "src/app/model/employee.model";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { AuthenticationModel } from 'src/app/model/authentication.model';
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleModel } from 'src/app/model/role.model';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {

  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resRole: RoleModel[]
  response: ResponseModel
  data: RoleModel
  resRoleTemp: RoleModel
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
    private roleService: RoleService, 
    private router: Router, 
    private toastr: ToastrService,
    private modalService: NgbModal, 
   ) { }

   ngOnInit(): void {
    this.getRoleData();
  }
  getRoleData() {
    this.roleService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resRole = this.response.data;
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
}

onTableDataChange(event:any){
  this.page = event
  this.getRoleData();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value
  this.page = 1
  this.getRoleData();
}

delete(){
  this.roleService.delete(this.resRoleTemp.idRole).subscribe(
    (res) => {
      this.response = res;
      if (res.success == true) 
      {
        this.toastr.success(res.message);  
        this.getRoleData()
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
  this.resRoleTemp = value
  console.log(value);
}
isAction: boolean = false;
}

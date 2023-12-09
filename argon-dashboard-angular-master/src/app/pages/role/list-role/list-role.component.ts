import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { RoleService } from "src/app/pages/services_API/role.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
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
  typeChild: string
  dataChild: RoleModel
  @ViewChild('myModal') myModal: ElementRef;
  constructor(
    private roleService: RoleService, 
    private toastr: ToastrService,
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
}

childTypeData(type:any, value: any = null){
  if (type) {
    this.typeChild = type
  }
  if (value) {
    this.dataChild = Object.assign({}, value)
  }
}

// childData(value: any){
//   if (value) {
//     this.dataChild = Object.assign({}, value)
//   }
// }
}

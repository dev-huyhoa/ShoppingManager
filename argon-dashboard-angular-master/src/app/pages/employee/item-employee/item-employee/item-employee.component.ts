import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { NotificationService } from "../../../services_API/notification.service";
import { ConfigService } from "../../../services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { EmployeeModel} from "src/app/model/employee.model";
import { RoleModel} from "src/app/model/role.model";

import { HttpClient } from "@angular/common/http";
import { EmployeeService } from "src/app/pages/services_API/employee.service";
import { RoleService } from "src/app/pages/services_API/role.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-employee',
  templateUrl: './item-employee.component.html',
  styleUrls: ['./item-employee.component.scss']
})
export class ItemEmployeeComponent implements OnInit {
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  idEmployee: any
  resEmployee: EmployeeModel
  resEmployeeTmp: EmployeeModel
  resRole: RoleModel[]
  response: ResponseModel
  image: any
  type: any
  profileImage: string | ArrayBuffer | null = 'https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg  '; // Hình ảnh mặc định
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private employeeService: EmployeeService, private notificationService: NotificationService,
   private roleService: RoleService, private configService: ConfigService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.idEmployee = this.activatedRoute.snapshot.paramMap.get('id2')
    this.type = this.activatedRoute.snapshot.paramMap.get('id1')

    this.init();  
    this.roleService.views().then(response =>{
      this.resRole = response
    })
  }
  
  init(){  
    if(this.type == 'detail'){
      this.employeeService.getEmployeeById(this.idEmployee).subscribe(
        (res) => {
          this.response = res;      
          this.resEmployee = this.response.data;
          if (this.resEmployee.image) {
            // this.img = this.configService.apiUrl + this.resEmployee.image
            this.image = this.resEmployee.image
          }
          else {
            this.image = " src/assets/img/employees/unknown.png"
          }
        },
        (error) => {
          this.toastr.error(error);          
        }
      )
    }
    else {
      this.resEmployee = new EmployeeModel
      this.resEmployeeTmp = Object.assign({}, this.resEmployee)
      if(this.resEmployee){

        if (this.resEmployee.image) {
         // this.img = this.configService.apiUrl + this.resEmployee.image
         this.image = this.resEmployee.image
        }
        else{
          this.image = "../../../../assets/img/employees/unknown.png"
        }
      }
    }

  }

  save(){
    let formData = new FormData()   
    if(this.fileSave)
    {   
      if(this.type == 'create'){
        this.resEmployee.image = this.image
        formData.append('resEmployeeData', JSON.stringify(this.resEmployee));
        formData.append('file', this.fileSave)
        this.employeeService.create(formData).subscribe(
          (res) => {
            this.response = res;
            if (res.success == true) 
            {
              this.toastr.success(res.message);  
              this.router.navigate(['','list-employee']);        
            }
            else {
              this.toastr.error(res.message);          
            }
          },
          (error) => {
            this.toastr.error(error);          
          }
        )
      }
      else {
        this.resEmployee.image = this.image
        formData.append('resEmployeeData', JSON.stringify(this.resEmployee));
        console.log(this.fileSave,"fileSave");
        formData.append('file', this.fileSave)
        this.employeeService.updateEmpImg(formData).subscribe(
          (res) => {
            this.response = res;
            if (res.success == true) 
            {
              this.toastr.success(res.message);  
              // this.router.navigate(['','list-employee']);        
            }
            else {
              this.toastr.error(res.message);          
            }
          },
          (error) => {
            this.toastr.error(error);          
          }
        )
      }

    }
    else{
      this.employeeService.updateEmp(this.resEmployee).subscribe(
        (res) => {
          this.response = res;
          if (res.success == true) 
          {
            this.toastr.success(res.message);     
            this.router.navigate(['','list-employee']);             
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
   
    
  }

  fileSave: any
  onFileChanged(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      this.fileSave = file
      reader.onload = () => {
        // Cập nhật giá trị của resEmployee.image thành hình ảnh được chọn
        this.image = reader.result as string;
      };
      reader.readAsDataURL(this.fileSave);
    }
  }
  
  delete(){
    this.employeeService.delete(this.idEmployee).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModalDelete.nativeElement.click()       
          setTimeout(() => {
           this.router.navigate(['','list-employee']);    
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


}

import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { RoleModel } from 'src/app/model/role.model';
import { RoleService } from "src/app/pages/services_API/role.service";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ListRoleComponent } from 'src/app/pages/role/list-role/list-role.component';

@Component({
  selector: 'app-item-role',
  templateUrl: './item-role.component.html',
  styleUrls: ['./item-role.component.scss']
})
export class ItemRoleComponent implements OnInit {
  @Input() resRole: RoleModel
  @Input() type: string
  resRoleTmp: RoleModel
  isChange: boolean = false
  response: ResponseModel

  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef

  constructor(
    private roleService: RoleService, 
    private toastr: ToastrService,
    private router: Router,
    private listRoleComponent: ListRoleComponent
  ) { }

  ngOnInit(): void {    
  }

  ngOnChanges(): void {
    if (this.type == "create") {
     this.resRole = new RoleModel()
     this.resRoleTmp = Object.assign({}, this.resRole)
    }
    this.resRoleTmp = Object.assign({}, this.resRole)  
  }

  inputChange(){
    if (JSON.stringify(this.resRole) != JSON.stringify(this.resRoleTmp)) {
      this.isChange = true
    }
    else{
      this.isChange = false
    }
  }

 save(){
  if (this.type == 'create') {
    this.roleService.create(this.resRole).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModal.nativeElement.click()       
          this.listRoleComponent.ngOnInit()

        }
        else {
          this.toastr.error(res.message);          
        }
      },
      (error) => {
        this.toastr.error("Không thể kết nối tới server");          
      }
    )
  }
  else{
    this.roleService.update(this.resRole).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModal.nativeElement.click()       
          this.listRoleComponent.ngOnInit()

        }
        else {
          this.toastr.error(res.message);          
        }
      },
      (error) => {
        this.toastr.error("Không thể kết nối tới server");          
      }
    )
  }
 }

 delete(){
  this.roleService.delete(this.resRole.idRole).subscribe(
    (res) => {
      this.response = res;
      if (res.success == true) 
      {
        this.toastr.success(res.message);  
        this.closeModalDelete.nativeElement.click()       
        this.listRoleComponent.ngOnInit()
      }
      else {
        this.toastr.error(res.message);          
      }
    },
    (error) => {
      this.toastr.error("Không thể kết nối tới server");          
    }
  )
 }

}

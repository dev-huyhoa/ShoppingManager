import { Component, OnInit, Input} from '@angular/core';
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from "src/app/model/employee.model";
import { AuthenticationModel } from "src/app/model/authentication.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  auth: AuthenticationModel
  dataChild: EmployeeModel
  typeChild: string
  resEmployee: EmployeeModel[]
  @Input() type: string
  resEmployeeTmp: EmployeeModel[]
  formData: any
  response: ResponseModel
  data: EmployeeModel
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem("currentUser"))
    console.log(this.auth );
    
  }

}

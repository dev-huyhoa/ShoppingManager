import { Component, OnInit, HostListener} from '@angular/core';
import { LoginService } from "src/app/pages/services_API/login.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModel } from "src/app/model/employee.model";
import { AuthenticationModel } from "src/app/model/authentication.model";
import { ConfigService } from "src/app/pages/services_API/config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  resEmployee: EmployeeModel = new EmployeeModel
    response: ResponseModel
    resAthentication: AuthenticationModel
    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent): void {
      if (event.key === 'Enter') {
        this.login(); // Gọi hàm xử lý khi nhấn phím "Enter"
      }
    }
  constructor(
    private loginService: LoginService, 
    private toastr: ToastrService,
    private router: Router,
    private configService: ConfigService

  ) {}

  ngOnInit() {    
  }

  login(){
    this.loginService.login(this.resEmployee).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.resAthentication = this.response.data
          localStorage.setItem("token", this.resAthentication.token)
          localStorage.setItem("currentUser", JSON.stringify(this.resAthentication))
          document.location.assign(this.configService.clientUrl + '#/Dashboard')

        }
        else {
          this.toastr.error(res.message);          
        }
      },
      (error) => {
        this.toastr.error("Không thể kết nối tới máy chủ");          
      }
    )
  }

}

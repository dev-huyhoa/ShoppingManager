import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { RoleModel } from "src/app/model/role.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class RoleService{
    constructor(private http:HttpClient, private configService:ConfigService, private notificationService: NotificationService, private toastr: ToastrService){ 
    }
    response: ResponseModel
    resRole: RoleModel[]

    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Role/listRole");
    }

    async views()
    {
      var value = <any>await new Promise<any>(resolve => {
        this.http.get<ResponseModel>(this.configService.apiUrl + "/api/Role/listRole").subscribe(res => {
          this.response = res
          if(res.success)
          {
            this.resRole =  this.response.data
            resolve(this.resRole);
          }
      }, error => {
        var message = this.configService.error(error.status, error.error != null?error.error.text:"");
        this.toastr.error(error);          
      })})
      return value 
    }

    create(data:any)
    {
      return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Role/createRole", data);
    }

    update(data:any)
    {
      return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Role/updateRole", data);
    }

    delete(idRole: any)
    {
      return this.http.delete<ResponseModel>( this.configService.apiUrl + "/api/Role/deleteRole?idRole="+ idRole);
    }
}
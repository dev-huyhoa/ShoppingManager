import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { EmployeeModel } from "src/app/model/employee.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";

@Injectable({
    providedIn: 'root'
})


export class LoginService{
    constructor(private http:HttpClient, private configService:ConfigService, private notificationService: NotificationService){ }

    login(data: any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Authentication/Login", data);
    }
}
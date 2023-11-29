import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { RoleModel } from "src/app/model/role.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";

@Injectable({
    providedIn: 'root'
})

export class RoleService{
    constructor(private http:HttpClient, private configService:ConfigService, private notificationService: NotificationService){ }

    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Role/listRole");
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { EmployeeModel } from "src/app/model/employee.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";

@Injectable({
    providedIn: 'root'
})


export class EmployeeService{
    constructor(private http:HttpClient, private configService:ConfigService, private notificationService: NotificationService){ }

    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Employee/listEmployee");
    }

    getEmployeeById(idEmployee:any)
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Employee/getEmployeeById?idEmployee="+idEmployee);
    }
    updateEmp(data:any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Employee/updateEmployee", data);
    }
    updateEmpImg(file:any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Employee/updateEmpImg", file);
    }
    create(data:any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Employee/createEmployee", data);
    }
    delete(idEmployee)
    {
        return this.http.delete<ResponseModel>( this.configService.apiUrl + "/api/Employee/deleteEmployee?idEmployee="+idEmployee);
    }
    
}  

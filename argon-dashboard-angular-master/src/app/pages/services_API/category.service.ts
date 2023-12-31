import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from "src/app/model/category.model";

@Injectable({
    providedIn: 'root'
})

export class CategoryService{
    constructor(private http:HttpClient, private configService:ConfigService, private notificationService: NotificationService, private toastr: ToastrService){ 
    }
    response: ResponseModel
    resCategory: CategoryModel[]

    async views()
    {
      var value = <any>await new Promise<any>(resolve => {
        this.http.get<ResponseModel>(this.configService.apiUrl + "/api/Category/listCategory").subscribe(res => {
          this.response = res
          if(res.success)
          {
            this.resCategory =  this.response.data
            resolve(this.resCategory);
          }
      }, error => {
        var message = this.configService.error(error.status, error.error != null?error.error.text:"");
        this.toastr.error(error);          
      })})
      return value 
    }
    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Category/listCategory");
    }
    create(data:any)
    {
      return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Category/createCategory", data);
    }

    update(data:any)
    {
      return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Category/updateCategory", data);
    }

    delete(idCategory: any)
    {
      return this.http.delete<ResponseModel>( this.configService.apiUrl + "/api/Category/deleteCategory?idCategory="+ idCategory);
    }
}
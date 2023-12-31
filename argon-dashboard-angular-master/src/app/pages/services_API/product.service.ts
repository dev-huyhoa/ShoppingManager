import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ProductModel } from "src/app/model/product.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private configService: ConfigService) { }

    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Product/getProduct");
    }
    getsProductImg(idProduct: any)
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Product/getProductImg?idProduct="+idProduct);
    }
    create(file: any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Product/createProduct", file);
    }

    updateProductImg(file: any)
    {
        return this.http.post<ResponseModel>( this.configService.apiUrl + "/api/Product/updateProductImg", file);
    }


    getNameCategoryByID(idCategory: any)
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Category/GetCategoryById?idCategory="+idCategory);
    }

    delete(idProduct: any)
    {
        return this.http.delete<ResponseModel>( this.configService.apiUrl + "/api/Product/deleteProduct?idProduct="+idProduct);
    }

}

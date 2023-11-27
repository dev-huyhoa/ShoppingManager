import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
@Injectable({
    providedIn: 'root'
})


export class NotificationService{
    constructor(private http:HttpClient, private configService:ConfigService, private toastr: ToastrService){ }

    handleAlertObj(data: any){

        if(data.type === 'Success')
        {
            this.toastr.success(data.messenge, 'Thông báo');
        }
        else if(data.type === 'Warning')
        {
            this.toastr.warning(data.messenge, 'Cảnh báo');
        }
        else if(data.type === 'Info')
        {
            this.toastr.info(data.messenge, 'Thông báo');
        }
        else
        {
            this.toastr.error(data.messenge, 'Lỗi');
        }

    }

    handleAlert(messenge: string, type: string){
        if(type === 'Success')
        {
            this.toastr.success(messenge, 'Thông báo');
        }
        else if( type === 'Warning')
        {
            this.toastr.warning(messenge, 'Cảnh báo');
        }
        else if( type === 'Info')
        {
            this.toastr.info(messenge, 'Thông báo');
        }
        else
        {
            this.toastr.error(messenge, 'Lỗi');
        }

    }
}

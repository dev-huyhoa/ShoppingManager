import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ToastrService } from 'ngx-toastr';
import { OrderModel } from "src/app/model/order.model";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
    private configService: ConfigService) { }

    gets()
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Payment/GetPaymentOrder");
    }

    UpdateStatusPayment(idCustomer: any, status: any)
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Payment/UpdateStatusPayment?idPayment="+idCustomer+"&status="+status);
    }

    GetAllPreviousCartsOfUser(idCustomer: any)
    {
        return this.http.get<ResponseModel>( this.configService.apiUrl + "/api/Cart/getAllPreviousCartsOfUser?idCustomer="+idCustomer);
    }
}

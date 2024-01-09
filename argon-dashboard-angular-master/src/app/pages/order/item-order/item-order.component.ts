import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { OrderModel } from 'src/app/model/order.model';
import { OrderService } from "src/app/pages/services_API/order.service";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ListOrderComponent } from 'src/app/pages/order/list-order/list-order.component';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent implements OnInit {
  @Input() resOrder: OrderModel
  @Input() type: string
  resOrderTmp: OrderModel
  isChange: boolean = false
  response: ResponseModel

  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef
  constructor(
    private orderService: OrderService, 
    private toastr: ToastrService,
    private router: Router,
    private listOrderComponent: ListOrderComponent
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.type == "create") {
     this.resOrder= new OrderModel()
     this.resOrderTmp = Object.assign({}, this.resOrder)

    }
    this.resOrderTmp = Object.assign({}, this.resOrder)  
  }

  inputChange(){
    if (JSON.stringify(this.resOrder) != JSON.stringify(this.resOrderTmp)) {
      this.isChange = true
    }
    else{
      this.isChange = false
    }
  }
}

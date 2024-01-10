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
  resCart : any
  selectedStatus: boolean = false
  @ViewChild('statusSelect') statusSelect!: ElementRef;
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
    if(this.resOrder != undefined && this.resOrder != null){
    this.getAllPreviousCartsOfUser(this.resOrder.customerId)
    }    
  }

  getAllPreviousCartsOfUser(idCustomer: any){
    this.orderService.GetAllPreviousCartsOfUser(idCustomer).subscribe(
      (res) => {
        this.response = res;
        console.log(res,"resssssssss");       
        this.resCart = res;
        // for (let index = 0; index < this.resCart.length; index++) {
        //   console.log(this.resCart[0].cartItems[0].product.title);
        // }
        console.log(this.resCart,"resCart");
        
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
  }

  UpdateStatusPayment(){
    this.orderService.UpdateStatusPayment(this.resOrder.id, this.selectedStatus).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModal.nativeElement.click()       
          this.listOrderComponent.ngOnInit()

        }
        else {
          this.toastr.error(res.message);          
        }
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
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

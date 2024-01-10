import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { OrderService } from "src/app/pages/services_API/order.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModel } from 'src/app/model/order.model';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resOrder: OrderModel[]
  response: ResponseModel
  data: OrderModel
  resCategoryTemp: OrderModel
  searchText : any = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  typeChild: string
  dataChild: OrderModel
  @ViewChild('myModal') myModal: ElementRef;
  constructor(
    private orderService: OrderService, 
    private toastr: ToastrService,
   ) { }

  ngOnInit(): void {
    this.getOrderData()
  }

  getOrderData() {
    this.orderService.gets().subscribe(
      (res) => {
        this.response = res;
        console.log(res,"res");
        
        this.resOrder = this.response.data;
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
}


  onTableDataChange(event:any){
    this.page = event
    this.getOrderData();
  }
  
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value
    this.page = 1
    this.getOrderData();
  }

  getDataRow(value: any){
    this.resCategoryTemp = value
  }

  childTypeData(type:any, value: any = null){
    if (type) {
      this.typeChild = type
    }
    if (value) {
      this.dataChild = Object.assign({}, value)
    }    
  }
}

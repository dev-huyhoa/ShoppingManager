import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { CustomerModel } from 'src/app/model/customer.model';
import { CustomerService } from "src/app/pages/services_API/customer.service";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resCustomer: CustomerModel[]
  response: ResponseModel
  data: CustomerModel
  resCustomeremp: CustomerModel
  searchText : any = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  typeChild: string
  dataChild: CustomerModel
  @ViewChild('myModal') myModal: ElementRef;
  constructor(
    private customerService: CustomerService, 
    private toastr: ToastrService,
   ) { }

  ngOnInit(): void {
    this.getCustomerData();
    
  }
  getCustomerData() {
    this.customerService.gets().subscribe(
      (res) => {
        console.log(res);
        
        this.response = res;
        this.resCustomer = this.response.data;
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
}

onTableDataChange(event:any){
  this.page = event
  this.getCustomerData();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value
  this.page = 1
  this.getCustomerData();
}
}

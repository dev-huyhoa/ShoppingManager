import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from "src/app/pages/services_API/product.service";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ProductModel } from "src/app/model/product.model";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { CategoryModel } from "src/app/model/category.model";
import { CategoryService } from "src/app/pages/services_API/category.service";

import { AuthenticationModel } from 'src/app/model/authentication.model';
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resProduct: ProductModel
  imageUrls: any
  // productImg: any
  response: ResponseModel
  data: ProductModel
  resProductTemp: ProductModel
  searchText: any = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  resCategory: CategoryModel[]
  typeChild: string
  dataChild: ProductModel
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProductData()
  }
  getDataRow(value: any){
    this.resProductTemp = value
  }
  

  getProductData() {
    this.productService.gets().subscribe(
      (res) => {        
        this.response = res;        
        this.resProduct = res.data                
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

  delete(){
    this.productService.delete(this.resProductTemp.idProduct).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {         
          this.toastr.success(res.message);  
          this.closeModalDelete.nativeElement.click()       
          this.getProductData()
          setTimeout(() => {
            this.closeModalDelete.nativeElement.click()
           }, 100);
        }
        else {
          this.toastr.error("Không thể kết nối tới server!");  
        }
      },
      (error) => {
        this.toastr.error("Có lỗi xảy ra!");          
      }
    )
   }

  onTableDataChange(event: any) {
    this.page = event
    this.getProductData();
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

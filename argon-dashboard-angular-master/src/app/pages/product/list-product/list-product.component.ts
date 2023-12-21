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
  idcategory123 = 'f79cb230-3df6-4648-b69b-e7c97f53301a'
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

  getProductData() {
    this.productService.gets().subscribe(
      (res) => {        
        this.response = res;
        console.log(res);
        
        this.resProduct = res.data   
        this.imageUrls = this.resProduct[0].imageUrls     
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }



  onTableDataChange(event: any) {
    this.page = event
    this.getProductData();
  }

  // getNameCategoryByID(idcategory: any){
  //   this.productService.getNameCategoryByID(idcategory).subscribe(
  //     (res) => {
  //       this.response = res;
  //       this.resCategory = res.data
  //       let name = this.resCategory.title

  //       return name
        
  //     },
  //     (error) => {
  //       this.toastr.error(error);
  //     }
  //   );
  // }

  childTypeData(type:any, value: any = null){
    if (type) {
      this.typeChild = type
    }
    if (value) {
      this.dataChild = Object.assign({}, value)
    }
  }
}

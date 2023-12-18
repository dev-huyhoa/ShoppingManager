import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from "src/app/pages/services_API/product.service";
import { NotificationService } from "src/app/pages/services_API/notification.service";
import { ProductModel } from "src/app/model/product.model";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
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
  resProduct: any
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
  idcategory123 = '0a557d1e-d08c-4ecb-6bc7-08dbfd5100cc'

  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProductData()
    this.getNameCategoryByID(this.idcategory123)
  }

  getProductData() {
    this.productService.gets().subscribe(
      (res) => {
        console.log(res);
        
        this.response = res;
        this.resProduct = res.data
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

  getNameCategoryByID(idcategory: any){
    this.productService.getNameCategoryByID(idcategory).subscribe(
      (res) => {
        this.response = res;
        console.log(res);
        
        // this.resProduct = res.data
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }
}

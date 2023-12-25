import { Component, OnInit, Input,ViewChild, ElementRef} from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { CategoryModel } from 'src/app/model/category.model';

import { ProductService } from "src/app/pages/services_API/product.service";
import { CategoryService } from "src/app/pages/services_API/category.service";

import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ProductImgModel } from "src/app/model/productImg.model";

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProductComponent } from 'src/app/pages/product/list-product/list-product.component';
import {NgxSpinnerService} from "ngx-spinner"
@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
  @Input() resProduct: ProductModel
  @Input() productImg: any

  @Input() type: string
  urls:any=[]
  resProductImg: ProductImgModel[]
  resCategory: CategoryModel
  resProductTmp: ProductModel
  isChange: boolean = false
  response: ResponseModel
  resProductTemp: ProductModel
  fileSave: any;
  formData:any = new FormData()  

  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef
  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    private listProductComponent: ListProductComponent,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {  
    this.getCategoryData()
      
  }

  ngOnChanges(): void {
    
    if (this.type == "create") {
     this.resProduct = new ProductModel()
     this.urls = []
     this.resProductTmp = Object.assign({}, this.resProduct)
    }
    if (this.type == "detail") {
      this.getProductImg(this.resProduct.idProduct)
    }
    this.resProductTmp = Object.assign({}, this.resProduct)  
  }

  getCategoryData(){
    this.categoryService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resCategory = res.data;          
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
  }

  getProductImg(idProduct: any){
    this.productService.getsProductImg(idProduct).subscribe(
      (res) => {
        this.response = res;
        this.resProductImg = res.data;    
        this.urls = []     
        this.resProductImg.forEach(element => {
          this.urls.push(element.imageUrl)            
        });
          
        console.log(this.urls);
        
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
  }


  inputChange(){
    if (JSON.stringify(this.resProduct) != JSON.stringify(this.resProductTmp)) {      
      this.isChange = true
    }
    else
    {
      this.isChange = false
    }
  }
 
  save(){
    if (this.type == 'create') {    
      this.spinner.show()    
      this.formData.append('resProductData', JSON.stringify(this.resProduct));    
      this.productService.create(this.formData).subscribe(
        (res) => {
          this.response = res;
          if (res.success == true) 
          {
            this.toastr.success(res.message);  
            this.closeModal.nativeElement.click()       
            this.listProductComponent.ngOnInit()
            this.spinner.hide()       
            this.formData = new FormData();
            this.resProduct = Object.assign({}, new ProductModel)
          }
          else {
            this.toastr.error(res.message);   
            this.spinner.hide()       
          }
        },
        (error) => {
          this.toastr.error("Không thể kết nối tới server");          
        }
      )
    }
    else{
      this.spinner.show()    
      this.formData.append('resProductData', JSON.stringify(this.resProduct));  
      this.productService.updateProductImg(this.formData).subscribe(
        (res) => {
          this.spinner.hide()
          this.response = res;
          if (res.success == true) 
          {
            this.toastr.success(res.message);  
            this.closeModal.nativeElement.click()       
            this.listProductComponent.ngOnInit()
            this.spinner.hide()       
            this.formData = new FormData();
            this.productImg = Object.assign({}, new ProductImgModel)
          }
          else {
            this.spinner.hide()
            this.toastr.error(res.message);          
          }
        },
        (error) => {
          this.toastr.error("Không thể kết nối tới server");    
          this.spinner.hide()       
      
        }
      )
    }
   }

   onFileChanged(e) {
    const input = e.target as HTMLInputElement;
    if(e.target.files){
      this.urls = []
      for(let i=0; i<e.target.files.length; i++){
          const file = input.files[i]
          var reader = new FileReader()
          reader.readAsDataURL(e.target.files[i])
          reader.onload=(events:any)=>{
            this.formData.append('file', file);
            this.urls.push(events.target.result)            
          }
      }     
    }
   }

   delete(){
    console.log(this.resProduct.idProduct);
    this.categoryService.delete(this.resProduct.idProduct).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {         
          this.toastr.success(res.message);  
          this.closeModalDelete.nativeElement.click()       
          this.listProductComponent.ngOnInit()

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
}

import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { CategoryModel } from 'src/app/model/category.model';

import { ProductService } from "src/app/pages/services_API/product.service";
import { CategoryService } from "src/app/pages/services_API/category.service";

import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProductComponent } from 'src/app/pages/product/list-product/list-product.component';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
  @Input() resProduct: ProductModel
  @Input() type: string
  resCategory: CategoryModel
  resProductTmp: ProductModel
  isChange: boolean = false
  response: ResponseModel
  // resCategory: CategoryModel
  idtest: any = 'Quần Áo'
  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef
  urls=[]
  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    private listProductComponent: ListProductComponent
  ) { }

  ngOnInit(): void {  
    this.getCategoryData()
  }

  ngOnChanges(): void {
    // console.log(this.resCategory);

    if (this.type == "create") {
     this.resProduct = new ProductModel()
     this.resProductTmp = Object.assign({}, this.resProduct)
    }
    this.resProductTmp = Object.assign({}, this.resProduct)  
  }

  getCategoryData(){
    this.categoryService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resCategory = res.data;
        console.log(this.resCategory,"rescategory");
          
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
    else{
      this.isChange = false
    }
  }
  fileSave: any
  // onFileChanged(event: any) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0];
  //     const reader = new FileReader();
  //     this.fileSave = file
  //     reader.onload = () => {
  //       // Cập nhật giá trị của resEmployee.image thành hình ảnh được chọn
  //       // this.image = reader.result as string;
  //     };
  //     reader.readAsDataURL(this.fileSave);
  //   }
  // }

   onFileChanged(e) {
    if(e.target.files){
      for(let i=0; i<File.length; i++){
          var reader = new FileReader()
          reader.readAsDataURL(e.target.files[i])
          reader.onload=(events:any)=>{
            this.urls.push(events.target.result)
          }
      }
    }
   }


  // save(){
  //   if (this.type == 'create') {
  //     this.productService.create().subscribe(
  //       (res) => {
  //         this.response = res;
  //         if (res.success == true) 
  //         {
  //           this.toastr.success(res.message);  
  //           this.closeModal.nativeElement.click()       
  //           this.listRoleComponent.ngOnInit()
  
  //         }
  //         else {
  //           this.toastr.error(res.message);          
  //         }
  //       },
  //       (error) => {
  //         this.toastr.error("Không thể kết nối tới server");          
  //       }
  //     )
  //   }
  //   else{
  //     this.productService.update(this.resProduct).subscribe(
  //       (res) => {
  //         this.response = res;
  //         if (res.success == true) 
  //         {
  //           this.toastr.success(res.message);  
  //           this.closeModal.nativeElement.click()       
  //           this.listRoleComponent.ngOnInit()
  
  //         }
  //         else {
  //           this.toastr.error(res.message);          
  //         }
  //       },
  //       (error) => {
  //         this.toastr.error("Không thể kết nối tới server");          
  //       }
  //     )
  //   }
  //  }


}

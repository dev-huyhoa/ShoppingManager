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
  
  // resCategory: CategoryModel
  idtest: any = 'Quần Áo'
  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef
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
    if (this.type == "create") {
     this.resProduct = new ProductModel()
     this.resProductTmp = Object.assign({}, this.resProduct)
    }
    if (this.type == "detail") {
      this.getProductImg(this.resProduct.idProduct)
    }
    this.resProductTmp = Object.assign({}, this.resProduct)  

    console.log(this.urls,"this.urls ON CHANGE");    
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

        const array = []
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
      console.log("123");
      
      this.isChange = true
    }
    else{
      this.isChange = false
    }
  }
  // fileSave: any
  // onFileChanged123(event: any) {
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

  fileSave: any;
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
      console.log(this.urls,"urlONFILE");
    }
   }

  formData:any = new FormData()   

  save(){
    if (this.type == 'detail') {
      console.log(this.resProduct,"product");
      
      this.formData.append('resProductData', JSON.stringify(this.resProduct));
      console.log(this.formData.get('resProductData'));
      console.log(this.urls,"url save");
      
      this.productService.create(this.formData).subscribe(
        (res) => {
          this.response = res;
          if (res.success == true) 
          {
            this.toastr.success(res.message);  
            this.closeModal.nativeElement.click()       
            this.listProductComponent.ngOnInit()
          }
          else {
            this.toastr.error(res.message);          
          }
        },
        (error) => {
          this.toastr.error("Không thể kết nối tới server");          
        }
      )
    }
    // else{
    //   this.productService.update(this.resProduct).subscribe(
    //     (res) => {
    //       this.response = res;
    //       if (res.success == true) 
    //       {
    //         this.toastr.success(res.message);  
    //         this.closeModal.nativeElement.click()       
    //         this.listRoleComponent.ngOnInit()
  
    //       }
    //       else {
    //         this.toastr.error(res.message);          
    //       }
    //     },
    //     (error) => {
    //       this.toastr.error("Không thể kết nối tới server");          
    //     }
    //   )
    // }
   }


}

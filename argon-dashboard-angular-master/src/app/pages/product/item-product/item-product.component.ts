import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { ProductService } from "src/app/pages/services_API/product.service";
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
  resProductTmp: ProductModel
  isChange: boolean = false
  response: ResponseModel

  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef

  constructor(
    private productService: ProductService, 
    private toastr: ToastrService,
    private router: Router,
    private listProductComponent: ListProductComponent
  ) { }

  ngOnInit(): void {    
  }

  ngOnChanges(): void {
    if (this.type == "create") {
     this.resProduct = new ProductModel()
     this.resProductTmp = Object.assign({}, this.resProduct)
    }
    this.resProductTmp = Object.assign({}, this.resProduct)  
  }

  inputChange(){
    if (JSON.stringify(this.resProduct) != JSON.stringify(this.resProductTmp)) {
      this.isChange = true
    }
    else{
      this.isChange = false
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

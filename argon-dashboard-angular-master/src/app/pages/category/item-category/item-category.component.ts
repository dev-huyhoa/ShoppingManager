import { Component, OnInit, Output, Input,ViewChild, ElementRef} from '@angular/core';
import { CategoryModel } from 'src/app/model/category.model';
import { CategoryService } from "src/app/pages/services_API/category.service";
import { ConfigService } from "src/app/pages/services_API/config.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ListCategoryComponent } from 'src/app/pages/category/list-category/list-category.component';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
  @Input() resCategory: CategoryModel
  @Input() type: string
  resCategoryTmp: CategoryModel
  isChange: boolean = false
  response: ResponseModel

  @ViewChild('closeModal') closeModal: ElementRef
  @ViewChild('closeModalDelete') closeModalDelete: ElementRef
  constructor(
    private categoryService: CategoryService, 
    private toastr: ToastrService,
    private router: Router,
    private listCategoryComponent: ListCategoryComponent
  ) { }

  ngOnInit(): void {    
  }

  ngOnChanges(): void {
    if (this.type == "create") {
     this.resCategory= new CategoryModel()
     this.resCategoryTmp = Object.assign({}, this.resCategory)

    }
    this.resCategoryTmp = Object.assign({}, this.resCategory)  
  }

  inputChange(){
    if (JSON.stringify(this.resCategory) != JSON.stringify(this.resCategoryTmp)) {
      this.isChange = true
    }
    else{
      this.isChange = false
    }
  }

 save(){
  if (this.type == 'create') {
    this.categoryService.create(this.resCategory).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModal.nativeElement.click()       
          this.listCategoryComponent.ngOnInit()

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
  else{
    this.categoryService.update(this.resCategory).subscribe(
      (res) => {
        this.response = res;
        if (res.success == true) 
        {
          this.toastr.success(res.message);  
          this.closeModal.nativeElement.click()       
          this.listCategoryComponent.ngOnInit()
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
 }

 delete(){
  this.categoryService.delete(this.resCategory.idCategory).subscribe(
    (res) => {
      this.response = res;
      if (res.success == true) 
      {
        this.toastr.success(res.message);  
        this.closeModalDelete.nativeElement.click()       
        this.listCategoryComponent.ngOnInit()
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

}

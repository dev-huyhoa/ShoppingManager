import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CategoryService } from "src/app/pages/services_API/category.service";
import { ResponseModel } from "src/app/model/responsiveModels/response.model";
import { PaginationInstance } from 'ngx-pagination'; // Import thư viện phân trang
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel } from 'src/app/model/category.model';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})


export class ListCategoryComponent implements OnInit {

  @ViewChild('closeModalDelete') closeModalDelete: ElementRef;
  resCategory: CategoryModel[]
  response: ResponseModel
  data: CategoryModel
  resCategoryTemp: CategoryModel
  searchText : any = ''
  p: number = 1;
  title = 'pagination';
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  typeChild: string
  dataChild: CategoryModel
  @ViewChild('myModal') myModal: ElementRef;
  constructor(
    private categoryService: CategoryService, 
    private toastr: ToastrService,
   ) { }

   ngOnInit(): void {
    this.getCategoryData();
  }
  getCategoryData() {
    this.categoryService.gets().subscribe(
      (res) => {
        this.response = res;
        this.resCategory = this.response.data;
      },
      (error) => {
        this.toastr.error(error);          
      }
    );
}

onTableDataChange(event:any){
  this.page = event
  this.getCategoryData();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value
  this.page = 1
  this.getCategoryData();
}

delete(){
  this.categoryService.delete(this.resCategoryTemp.idCategory).subscribe(
    (res) => {
      this.response = res;
      if (res.success == true) 
      {
        this.toastr.success(res.message);  
        this.getCategoryData()
        setTimeout(() => {
          this.closeModalDelete.nativeElement.click()
         }, 100);
      }
      else {
        this.toastr.error(res.message);          
      }
    },
    (error) => {
      this.toastr.error(error);          
    }
  );
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

// childData(value: any){
//   if (value) {
//     this.dataChild = Object.assign({}, value)
//   }
// }
}

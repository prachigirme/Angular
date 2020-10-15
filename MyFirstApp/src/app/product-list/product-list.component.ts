import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string ='Product List';
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  //listFilter: string='cart';
  errorMessage: string;




  _listFilter = '';          //filter
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {   //filter
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];   //filter
  products: IProduct[]=[]    //remove products //service 2
  

constructor(private productService:ProductService) {      //filter //service 1
   
}

performFilter(filterBy: string): IProduct[] {   //filter
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


toggleImage(): void{
  this.showImage=!this.showImage;
}



  

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:products=>
      
      {
        this.products=products,
        this.filteredProducts=this.products;
      },
      error: err=>this.errorMessage=err
    });
    
  }

}

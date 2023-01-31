import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(
    private _productService: productService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._productService.getProduct().subscribe({
      next: (data) => {
        console.log('data');
        console.log(data);
        this.listProducts = data;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => console.info('complete')
    });
  }

  deleteProducts(id: any){
    this._productService.deleteProduct(id).subscribe({
      next: (data) => {
        this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
        this.getAllProducts();
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => console.info('complete')
    });
  }
}

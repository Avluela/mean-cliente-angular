import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productService: productService) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addproduct(){
    // visualizar por consola todo el form
    console.log(this.productForm);

    // acceder a un valor del form
    console.log(this.productForm.get('product')?.value);

    // Creo una constante Product de tipo product, para poder pasarle los datos del form al back
    // el tipo product se importa arriba linea 4
    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value,
    }

    console.log(PRODUCT);

    this._productService.saveProduct(PRODUCT).subscribe({
      next: (data) => {
        this.toastr.success('Product registrado!', 'El product fue registrado con éxito!');

        // Para poder usar esta funcion es necesario importar Router en linea 15 y 3
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.error(e);
        this.productForm.reset();
      },
      complete: () => console.info('complete')
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    // visualizar por consola todo el form
    console.log(this.productoForm);

    // acceder a un valor del form
    console.log(this.productoForm.get('producto')?.value);

    // Creo una constante Producto de tipo producto, para poder pasarle los datos del form al back
    // el tipo producto se importa arriba linea 4
    const PRODUCTO: Producto = {
      name: this.productoForm.get('producto')?.value,
      category: this.productoForm.get('categoria')?.value,
      location: this.productoForm.get('ubicacion')?.value,
      price: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);

    this.toastr.success('Producto registrado!', 'El producto fue registrado con éxito!');

    // Para poder usar esta funcion es necesario importar Router en linea 15 y 3
    this.router.navigate(['/']);
  }

}

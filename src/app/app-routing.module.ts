import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent}, //En el caso de que la ruta sea vacía, va a renderizar ListProductsComponents
  { path: 'create-product', component: CreateProductComponent},
  { path: 'editar-product/:id', component: CreateProductComponent},
  { path: '**', redirectTo: '', pathMatch:'full'} //Redirecciona a la ruta principal en cualquier otra ruta que no sea la declaradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

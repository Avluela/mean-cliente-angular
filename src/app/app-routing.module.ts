import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

//Components
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent},
  { path: 'crear-producto', component: CrearProductoComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  { path: '**', redirectTo: '', pathMatch:'full'} //Redirecciona a la ruta principal en cualquier otra ruta que no sea la declaradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

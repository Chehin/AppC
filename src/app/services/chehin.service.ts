import { Injectable, OnInit } from '@angular/core';
import { ProductoItem } from '../models/producto-item.model';

@Injectable({
  providedIn: 'root'
})
export class ChehinService {
  public arregloProductos: ProductoItem[] = [];  // Arreglo de productosItem que contiene todo!

  constructor() {
    console.log('Servicio inicializado  ' );

    this.cargarStorage();

    // for (let i = 0; i < this.arregloProductos.length; i++) {
    //   console.log('El arreglo es :' + this.arregloProductos[i]);
    // }

  }

  devuelveProductoI() {
  }

// *********************************************
// Crear producto
// *********************************************

  crearProducto( tipo: string, marca: string, precio: number ){

    // console.log(variable.tipo);
    const nuevoProdu = new ProductoItem(marca, tipo , precio);

    this.arregloProductos.push(nuevoProdu);

    this.guardarStorage();
  }

// *********************************************
// Guardar en el Storage
// *********************************************


    guardarStorage(){
      // localStorage.setItem('TipoProducto', JSON.stringify(tipo));
      // localStorage.setItem('DescProducto', JSON.stringify(descripcion));
      localStorage.setItem('data', JSON.stringify(this.arregloProductos) );

    }

// *********************************************
// Devolver productos del storage
// *********************************************


cargarStorage() {

  if ( localStorage.getItem('data') ) {
     this.arregloProductos = JSON.parse( localStorage.getItem('data') );
   } else {
     this.arregloProductos = [];
  }
  }

}

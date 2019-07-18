// Productos por tipo

// IGNORAR ESTA CLASE!!!

import { ProductoItem } from './producto-item.model';


export class Producto {

    id: number;
    tipo: string;    // Pantalon,camisa,gorras,sleep
    tamaño: number;
    ProductoItem: ProductoItem[];    // 'SubArreglo' de productos por marca


    constructor( tipo: string) {

        // console.log('En producto.model : ' + ProductoItem.length );

        this.tipo = tipo;
        this.tamaño = 1;
        this.id = new Date().getTime();    // Numero unico que se asigna como el momento de la creacion

    }

}


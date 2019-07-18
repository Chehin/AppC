import { Component, OnInit } from '@angular/core';
import { ChehinService } from '../services/chehin.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = 'checkmark';

  // Array de productos
  public items: Array<{ title: string; comentario: string; icon: string; precio: number }> = [];
  constructor(private chehinService: ChehinService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Producto' + i,
        comentario: 'Esto es el comentario del item #' + i,
        precio: i,
        icon: this.icons
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

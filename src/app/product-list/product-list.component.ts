import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product, products } from '../products';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;

  listProduct!: Array<Product>;
  newProduct: Product = new Product();

  constructor(private service: ProdutoService) {}

  ngOnInit() {
    this.listProduct = new Array();
  }

  public addProduct(form: NgForm) {
    //console.log(this.newProduct);

    if (!form.valid) {
      this.share('Produto ou Preço não informados.');
      return;
    } else if (!this.service.validarDisponibilidade(this.newProduct)) {
      this.share('Preço não pode ser menor que 10.');
      return;
    }

    this.newProduct.id = new Date().getTime();
    //this.newProduct.name = this.newProduct.name + this.newProduct.id;
    this.listProduct.push(this.newProduct);
    this.newProduct = new Product();
    this.share('Item adcionado');
  }

  public delProduct(p: Product) {
    this.listProduct = this.listProduct.filter(
      (itemList) => itemList.id != p.id
    );

    this.share('Item removeido');
  }

  share(text: string) {
    window.alert(text);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

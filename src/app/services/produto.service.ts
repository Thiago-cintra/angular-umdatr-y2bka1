import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable()
export class ProdutoService {
  validarDisponibilidade(item: Product) {
    //todo chamar rest
    console.log(item);
    if (item.price > 10) {
      return true;
    }

    return false;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdutoService } from './services/produto.service';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ServiceListComponent }]),
  ],
  providers: [ProdutoService],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ServiceListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

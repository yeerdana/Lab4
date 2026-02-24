import { Component } from '@angular/core';
import { ProductCard } from '../../product-card/product-card';
import { PRODUCTS } from '../../products.data';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  products = PRODUCTS;
}

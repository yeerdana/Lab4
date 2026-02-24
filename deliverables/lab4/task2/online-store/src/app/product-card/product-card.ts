import { Component, input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();

  stars(): string {
    const full = Math.round(this.product().rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
  }
}

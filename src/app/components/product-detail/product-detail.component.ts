import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  faArrowLeft = faArrowLeft;
}
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute, private productSvc: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productSvc.getProductById(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft as faArrowLeftIcon } from '@fortawesome/free-solid-svg-icons';

import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  faArrowLeft: IconProp = faArrowLeftIcon;
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productSvc.getProductById(id);
  }
}


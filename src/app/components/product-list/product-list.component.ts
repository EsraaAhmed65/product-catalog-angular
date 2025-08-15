import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// alias imports to avoid name shadowing with fields
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleRight as faCircleRightIcon,
  faArrowLeft as faArrowLeftIcon,
} from '@fortawesome/free-solid-svg-icons';

import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  faCircleRight: IconProp = faCircleRightIcon;
  faArrowLeft:  IconProp = faArrowLeftIcon;

  categoryName = '';
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      this.categoryName = pm.get('categoryName') ?? '';
      this.products = this.productSvc.getProductsByCategory(this.categoryName);
    });
  }

  goToDetails(p: Product) {
    this.router.navigate(['/category', p.category, 'product', p.id]);
  }
}

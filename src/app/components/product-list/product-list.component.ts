import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  faCircleRight = faCircleRight;
  faArrowLeft   = faArrowLeft; 
  categoryName = '';
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName') || '';
    this.products = this.productSvc.getProductsByCategory(this.categoryName);
  }

  goToDetails(p: Product) {
    this.router.navigate(['/category', this.categoryName, 'product', p.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  /* Category names shown as cards */
  categories: string[] = [];

  /* Hero images for each category */
  catImages: Record<string, string> = {
    Electronics: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Books: 'https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Clothing: 'https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productSvc.getCategories();
  }

  /* Return an image URL for the given category */
  srcFor(cat: string): string {
    return this.catImages[cat] || `https://picsum.photos/seed/${cat}/800/600`;
  }
}

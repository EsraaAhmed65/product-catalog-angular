import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'category/:categoryName', component: ProductListComponent },
  { path: 'category/:categoryName/product/:productId', component: ProductDetailComponent },
];

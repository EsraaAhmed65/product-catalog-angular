## On vercel:
https://product-catalog-angular.vercel.app/


# Product Catalog (Angular · DI & Routing)

A simple Angular app that demonstrates **dependency injection** and **routing**.  
Users can browse product **categories**, view **products** within a category, and open a **product detail** page.

---

## 🎯 Objectives covered

- **Routing**
  - Route params for category and product:  
    `/category/:categoryName` → list, `/category/:categoryName/product/:productId` → detail
  - Navigation with `routerLink` and active link with `routerLinkActive`
  - `<router-outlet>` in `AppComponent` to render routed views

- **Dependency Injection**
  - `ProductService` is a singleton (`@Injectable({ providedIn: 'root' })`)
  - Components inject it via constructor and fetch mock data

- **Templates**
  - `*ngFor` to render lists
  - `*ngIf` for empty states and guard rendering
  - Interpolation `{{ }}` for data binding

- **UI**
  - Bootstrap layout with small custom CSS
  - Polished cards, responsive images with `aspect-ratio`
  - Nice navbar & footer, hover transitions

- **Accessibility**
  - Images include `alt` and `title` attributes
  - Buttons/links use descriptive labels

---

## 📦 Tech stack

- Angular (standalone components)
- TypeScript
- Bootstrap 5 (optional) + Font Awesome (optional)

---

## Structure

src/
  app/
    components/
      category-list/
        category-list.component.ts
        category-list.component.html
        category-list.component.css
      product-list/
        product-list.component.ts
        product-list.component.html
        product-list.component.css
      product-detail/
        product-detail.component.ts
        product-detail.component.html
        product-detail.component.css
    services/
      product.service.ts
    app.component.ts
    app.component.html
    app.component.css
    app.routes.ts
  styles.css
  index.html
  
---

## 🚀 Getting started

```bash
# Prereqs: Node 18+, Angular CLI
npm install -g @angular/cli

# Install deps
npm install

# Run
ng serve -o
# App: http://localhost:4200

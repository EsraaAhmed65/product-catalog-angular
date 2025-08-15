import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  imageAlt?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    // Electonics (3)
    {
      id: 1,
      name: 'Android Phone (Bezel-less)',
      price: 25000,
      description: 'Android smartphone with a near bezel-less display and vivid screen. Photo shows two devices on a light background for illustration.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Two modern Android smartphones on a light background with colorful home screens'
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 13',
      price: 110000,
      description: 'Apple MacBook laptop with 13" Retina display, 16GB RAM, and fast SSD. Photo shows an open MacBook on a clean desk.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200',
      imageAlt: 'Open Apple MacBook on a clean desk'
    },
    {
      id: 3,
      name: 'Apple iPad 10.2',
      price: 72000,
      description: '10.2" Retina display, A-series chip, and all-day battery life. Supports Apple Pencil (1st gen) and Smart Keyboard; iPadOS multitasking, stereo speakers.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Apple iPad tablet on a clean desk'
    },

    // Books (3)
    {
      id: 4,
      name: 'Vintage Classics Bundle (Hardcover)',
      price: 1280,
      description: 'Set of antique hardcover novels with decorative spines, tied with twine and accented with dried flowers. Perfect for décor, gifting, or collectors.',
      category: 'Books',
      image: 'https://images.unsplash.com/photo-1556566952-11eff3d06ed4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Bundle of vintage hardcover books tied with twine and flowers'
    },

    {
      id: 5,
      name: 'Assorted Paperback Novels',
      price: 2940,
      description: 'Set of paperback novels (mixed titles) in trade-paper size with cream pages and matte covers. Photo shows open books styled with a pink peony and white flowers.',
      category: 'Books',
      image: 'https://images.unsplash.com/photo-1588287028941-99e3c7601d0e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Several open paperback books on a marble surface with a pink peony and small white flowers'
    },

    {
      id: 6,
      name: 'Cozy Open Paperback',
      price: 630,
      description: 'Open paperback novel on a wooden table lit by warm string lights. Trade-paper size with cream pages—photo for ambiance; string lights are props and not included.',
      category: 'Books',
      image: 'https://images.unsplash.com/photo-1595405895473-1adb3f68501a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      imageAlt: 'Open paperback book with warm string lights on a wooden table'
    },


    // Clothing (3)
 {
  id: 7,
  name: 'Floral Stiletto Heels',
  price: 3450,
  description: 'Pointed-toe stiletto heels with vibrant floral print and smooth faux leather upper.',
  category: 'Clothing',
  image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Pair of floral pointed-toe stiletto heels against a blue backdrop'
},
{
  id: 8,
  name: 'Classic Pullover Hoodie',
  price: 2670,
  description: 'Soft fleece pullover hoodie with drawcord hood and roomy front kangaroo pocket.',
  category: 'Clothing',
  image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'White fleece hoodie styled with denim jeans on a neutral background'
},
{
  id: 9,
  name: 'Cozy Knit Outfit Set',
  price: 3520,
  description: 'Warm beanie and knit sweaters styled with denim jeans for everyday comfort.',
  category: 'Clothing',
  image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Beanie and folded knit sweaters arranged with jeans on a bed'
}

  ];

  getCategories(): string[] {
    return Array.from(new Set(this.products.map(p => p.category)));
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}

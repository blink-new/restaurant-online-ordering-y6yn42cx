import { MenuCategory, MenuItem } from '../types'

export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our delicious appetizers',
    displayOrder: 1
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Hearty and satisfying main dishes',
    displayOrder: 2
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to end your meal',
    displayOrder: 3
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks and beverages',
    displayOrder: 4
  }
]

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'spring-rolls',
    categoryId: 'appetizers',
    name: 'Spring Rolls',
    description: 'Crispy vegetable spring rolls served with sweet chili sauce',
    price: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 1
  },
  {
    id: 'chicken-wings',
    categoryId: 'appetizers',
    name: 'Buffalo Chicken Wings',
    description: 'Spicy buffalo wings with celery sticks and blue cheese dip',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 2
  },
  {
    id: 'mozzarella-sticks',
    categoryId: 'appetizers',
    name: 'Mozzarella Sticks',
    description: 'Golden fried mozzarella sticks with marinara sauce',
    price: 9.99,
    imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 3
  },

  // Main Courses
  {
    id: 'margherita-pizza',
    categoryId: 'mains',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil',
    price: 16.99,
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 1
  },
  {
    id: 'grilled-salmon',
    categoryId: 'mains',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon herb butter and vegetables',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 2
  },
  {
    id: 'beef-burger',
    categoryId: 'mains',
    name: 'Classic Beef Burger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and fries',
    price: 18.99,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 3
  },
  {
    id: 'chicken-pasta',
    categoryId: 'mains',
    name: 'Chicken Alfredo Pasta',
    description: 'Creamy alfredo pasta with grilled chicken and parmesan',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 4
  },

  // Desserts
  {
    id: 'chocolate-cake',
    categoryId: 'desserts',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate ganache',
    price: 7.99,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 1
  },
  {
    id: 'tiramisu',
    categoryId: 'desserts',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 2
  },
  {
    id: 'ice-cream',
    categoryId: 'desserts',
    name: 'Vanilla Ice Cream',
    description: 'Premium vanilla ice cream with your choice of toppings',
    price: 5.99,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 3
  },

  // Beverages
  {
    id: 'coca-cola',
    categoryId: 'beverages',
    name: 'Coca Cola',
    description: 'Classic Coca Cola soft drink',
    price: 2.99,
    imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 1
  },
  {
    id: 'fresh-juice',
    categoryId: 'beverages',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 2
  },
  {
    id: 'coffee',
    categoryId: 'beverages',
    name: 'Coffee',
    description: 'Freshly brewed coffee',
    price: 3.99,
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 3
  },
  {
    id: 'iced-tea',
    categoryId: 'beverages',
    name: 'Iced Tea',
    description: 'Refreshing iced tea with lemon',
    price: 3.49,
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    isAvailable: true,
    displayOrder: 4
  }
]
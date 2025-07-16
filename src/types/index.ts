export interface MenuCategory {
  id: string
  name: string
  description: string
  displayOrder: number
}

export interface MenuItem {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  imageUrl: string
  isAvailable: boolean
  displayOrder: number
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
}

export interface Order {
  id: string
  userId: string
  customerName: string
  customerPhone: string
  deliveryAddress: string
  items: CartItem[]
  totalAmount: number
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered'
  createdAt: Date
}

export interface DeliveryInfo {
  customerName: string
  customerPhone: string
  deliveryAddress: string
}
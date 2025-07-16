import { createContext } from 'react'
import { CartItem, MenuItem } from '../types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

interface CartContextType {
  state: CartState
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
import { ShoppingCart, Utensils } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useCart } from '../hooks/useCart'

export function Header() {
  const { getTotalItems, toggleCart } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Utensils className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Bella Vista</h1>
            <p className="text-xs text-gray-500">Italian Restaurant</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={toggleCart}
          className="relative"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {totalItems > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  )
}
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { MenuItem } from '../types'
import { useCart } from '../hooks/useCart'

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(item)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <Button
          onClick={handleAddToCart}
          disabled={!item.isAvailable}
          className="w-full"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
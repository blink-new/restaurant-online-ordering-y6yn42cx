import { Button } from './ui/button'
import { MenuCategory } from '../types'

interface MenuCategoriesProps {
  categories: MenuCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function MenuCategories({ categories, activeCategory, onCategoryChange }: MenuCategoriesProps) {
  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="whitespace-nowrap flex-shrink-0"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
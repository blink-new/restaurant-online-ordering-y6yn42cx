import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { MenuCategories } from './components/MenuCategories'
import { MenuItemCard } from './components/MenuItemCard'
import { CartSidebar } from './components/CartSidebar'
import { CartProvider } from './components/CartProvider'
import { menuCategories, menuItems } from './data/menuData'
import { MenuItem } from './types'
import { blink } from './blink/client'

function AppContent() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id || '')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const filteredItems = menuItems.filter(item => item.categoryId === activeCategory)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Bella Vista</h1>
          <p className="text-gray-600 mb-6">Please sign in to view our menu and place orders</p>
          <button
            onClick={() => blink.auth.login()}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MenuCategories
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {menuCategories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          <p className="text-gray-600">
            {menuCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item: MenuItem) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items available in this category</p>
          </div>
        )}
      </main>

      <CartSidebar />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
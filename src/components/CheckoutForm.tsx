import { useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Separator } from './ui/separator'
import { useCart } from '../hooks/useCart'
import { DeliveryInfo } from '../types'

interface CheckoutFormProps {
  onBack: () => void
}

export function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { state, getTotalPrice, clearCart, closeCart } = useCart()
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    customerName: '',
    customerPhone: '',
    deliveryAddress: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const totalPrice = getTotalPrice()

  const handleInputChange = (field: keyof DeliveryInfo, value: string) => {
    setDeliveryInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setOrderPlaced(true)
    setIsSubmitting(false)
  }

  const handleOrderComplete = () => {
    clearCart()
    closeCart()
    setOrderPlaced(false)
  }

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Order Placed Successfully!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We'll prepare your food and deliver it to your address.
          </p>
          <p className="text-sm text-gray-500">
            Estimated delivery time: 30-45 minutes
          </p>
        </div>
        <Button onClick={handleOrderComplete} className="w-full">
          Continue Shopping
        </Button>
      </div>
    )
  }

  const isFormValid = deliveryInfo.customerName.trim() && 
                     deliveryInfo.customerPhone.trim() && 
                     deliveryInfo.deliveryAddress.trim()

  return (
    <div className="flex flex-col h-full">
      <Button
        variant="ghost"
        onClick={onBack}
        className="self-start mb-4 p-0 h-auto"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cart
      </Button>

      <form onSubmit={handleSubmit} className="flex-1 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                type="text"
                value={deliveryInfo.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="customerPhone">Phone Number *</Label>
              <Input
                id="customerPhone"
                type="tel"
                value={deliveryInfo.customerPhone}
                onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <Label htmlFor="deliveryAddress">Delivery Address *</Label>
              <Textarea
                id="deliveryAddress"
                value={deliveryInfo.deliveryAddress}
                onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                placeholder="Enter your complete delivery address"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            {state.items.map((item) => (
              <div key={item.menuItem.id} className="flex justify-between text-sm">
                <span>
                  {item.menuItem.name} × {item.quantity}
                </span>
                <span>${(item.menuItem.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? 'Placing Order...' : 'Place Order'}
        </Button>
      </form>
    </div>
  )
}
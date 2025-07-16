import { useState } from 'react'
import { ArrowLeft, CheckCircle, Calendar, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Separator } from './ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useCart } from '../hooks/useCart'
import { DeliveryInfo } from '../types'

interface CheckoutFormProps {
  onBack: () => void
}

// Helper function to get available delivery dates (today + next 7 days)
const getAvailableDates = () => {
  const dates = []
  const today = new Date()
  
  for (let i = 0; i < 8; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    const dateString = date.toISOString().split('T')[0]
    const displayDate = i === 0 ? 'Today' : 
                       i === 1 ? 'Tomorrow' : 
                       date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    
    dates.push({ value: dateString, label: displayDate })
  }
  
  return dates
}

// Helper function to get available time slots
const getAvailableTimeSlots = () => {
  const slots = []
  const startHour = 11 // 11 AM
  const endHour = 22 // 10 PM
  
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const time12 = `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`
      
      slots.push({ value: time24, label: time12 })
    }
  }
  
  return slots
}

export function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { state, getTotalPrice, clearCart, closeCart } = useCart()
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    customerName: '',
    customerPhone: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryTime: ''
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
          {deliveryInfo.deliveryDate && deliveryInfo.deliveryTime && (
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-700">
                <strong>Scheduled Delivery:</strong>
              </p>
              <p className="text-sm text-gray-600">
                {getAvailableDates().find(d => d.value === deliveryInfo.deliveryDate)?.label} at{' '}
                {getAvailableTimeSlots().find(t => t.value === deliveryInfo.deliveryTime)?.label}
              </p>
            </div>
          )}
          <p className="text-sm text-gray-500">
            We'll contact you if there are any changes to your delivery schedule.
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
                     deliveryInfo.deliveryAddress.trim() &&
                     deliveryInfo.deliveryDate &&
                     deliveryInfo.deliveryTime

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deliveryDate">Delivery Date *</Label>
                <Select
                  value={deliveryInfo.deliveryDate}
                  onValueChange={(value) => handleInputChange('deliveryDate', value)}
                >
                  <SelectTrigger className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Select delivery date" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableDates().map((date) => (
                      <SelectItem key={date.value} value={date.value}>
                        {date.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="deliveryTime">Delivery Time *</Label>
                <Select
                  value={deliveryInfo.deliveryTime}
                  onValueChange={(value) => handleInputChange('deliveryTime', value)}
                >
                  <SelectTrigger className="w-full">
                    <Clock className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Select delivery time" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableTimeSlots().map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
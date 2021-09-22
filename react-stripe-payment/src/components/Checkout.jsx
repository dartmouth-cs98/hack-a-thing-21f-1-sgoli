import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StripeProvider apiKey="pk_test_51JcMw0FSH5T0qnif8I7DwprAKkCTWO86PqaGcqAfyYsHyfChs1GKaR3xQy3TxlwH3UNVZf9l0Emda8Xl40Sut9IC00kgLXxltI">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout

import React, { useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Products from './Products'
import Checkout from './Checkout'
import { products } from '../products'

const history = createBrowserHistory()

const App = () => {
  const selectedProduct = {
    name: 'Rubber Duck',
    desc: `Rubber ducks can lay as many eggs as the best chicken layers, and they
            are fun to watch with their antics in your backyard, your barnyard, or
            your pond.`,
    price: 9.99,
    img:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqkN8wkHiAuT2FQ14AsJFgihZDzKmS6OHQ6eMiC63rW8CRDcbK',
    id: 100
  }   

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Checkout
              selectedProduct={selectedProduct}
              history={history}
            />
          )}
        />
      </Switch>
    </Router>
  )
}

export default App

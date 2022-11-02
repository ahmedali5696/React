import React, { createContext, useEffect, useState } from "react";
const picsContext = createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const photoArr = allPhotos.map(item => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite }
      }
      return item
    })

    setAllPhotos(photoArr)
  }

  function addToCart(img) {
    setCartItems(pervState => [...pervState, img])
    console.log(cartItems)
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  const contextValue = {
    allPhotos,
    toggleFavorite,
    addToCart,
    cartItems,
    emptyCart,
    removeFromCart
  }
  
  return (
    <picsContext.Provider value={contextValue}>
      {children}
    </picsContext.Provider>
  )
}


export { ContextProvider, picsContext }
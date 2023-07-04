import React from 'react'
import './Products.css'

const Product = ({ item }) => {
  const { title, image, description, price } = item

  const handleAddToCart = () => {}

  return (
    <div className='product'>
      <div>
        <img className='product-image' src={image} alt='card' />
      </div>
      <div>
        <h5 className='product-name'>{title}</h5>
        <h4>{description}</h4>
        <h4>price:{price}</h4>
        <div>
          <button className='product-add' onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartProduct } from '../storecontext/Context'

const Cart = () => {
  const { cartProducts, handleDecrease, handleIncrease } =
    useContext(CartProduct)

  return (
    <div className='cart'>
      <Link to='/'>Back to home </Link>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cartProducts.map((item, index) => (
            <tr key={index}>
              <td>
                <div className='meta'>
                  <img src={item.image} alt={item.title} width={40} />
                  <div className='info'>
                    {item.title}
                    <div className='buttons'>
                      <button onClick={() => handleDecrease(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item)}>+</button>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span>{item.price}</span>
              </td>
              <td>
                <span>{item.price * item.quantity}</span>
              </td>
            </tr>
          ))}
          <tr style={{ background: '#efefef' }}>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td>
              <strong>
                {parseInt(
                  cartProducts.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                )}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Cart

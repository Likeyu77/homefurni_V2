import React from 'react'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
const CheckoutItem = () => {
  const { cart } = useCartContext()
  return (
    <>
      {
        cart.map((item) => {
          const { id, name, amount, image, price, color } = item
          const totalPrice = price * amount
          return (
            <Wrapper key={id}>
              <div className='title'>
                <img src={image} alt={name} />
                <div>
                  <h5 className='name'>{amount}*{name}</h5>
                  <p className='color'>
                    color :
                    <span style={{ background: color }} />
                  </p>
                  <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
                </div>

              </div>

            </Wrapper>
          )
        })
      }
    </>

  )
}
const Wrapper = styled.article`
  border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 0px 0px 0.5px, rgba(50, 50, 93, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1.5px 0px;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 150px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
  
  
`


export default CheckoutItem
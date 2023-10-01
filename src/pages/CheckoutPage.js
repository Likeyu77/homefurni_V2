import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout, CheckoutItem } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'



const CheckoutPage = () => {
  const { cart, total_amount, shipping_fee } = useCartContext()
  const { myUser } = useUserContext()

  const changeHandler = () => { }

  const submitHandler = (e) => { e.preventDefault() }
  return <main>
    <PageHero title='checkout' />
    <Wrapper>
      {cart.length < 1 ? <div className='empty'>
        <h2>your cart is empty</h2>
        <Link to='/products' className='btn'>fill it</Link>
      </div> : (
        <>
          <div className='payment-info'>
            <h4>Contact Details</h4>
            <form className='personal-info' onSubmit={submitHandler}>
              <input type="text" name='name' placeholder='Name' value={myUser ? myUser.name : ''} onChange={changeHandler} />
              <input type="text" name='address' placeholder='Address' onChange={changeHandler} />
              <input type="email" name='email' placeholder='Email' value={myUser ? myUser.email : ''} onChange={changeHandler} />
              <input type="text" name='mobile' placeholder='mobile' onChange={changeHandler} />
            </form>

            <StripeCheckout />
          </div>

          <div className='items-summary'>
            <article className='total-amount'>
              <h5>
                subtotal :<span>{formatPrice(total_amount)}</span>
              </h5>
              <p>
                shipping fee :<span>{formatPrice(shipping_fee)}</span>
              </p>
              <hr />
              <h4>
                order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
              </h4>
            </article>

            <CheckoutItem />
          </div>
        </>
      )}


    </Wrapper>
  </main>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 3rem 0;
  .personal-info{
    display: grid;
    grid-template-columns:1fr;
    gap: 1rem;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: rgba(50, 50, 93, 0.1) 0px 0px 0px 0.5px, rgba(50, 50, 93, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1.5px 0px;
    
  }
  .personal-info input{
    height: 2rem;
    padding-left:0.5rem ;
    border: solid 1px var( --clr-grey-8);
    border-radius: var(--radius);
  }
  .items-summary{
    margin-top: 3rem;
  
  }
  .total-amount {
    /* border: 1px solid var(--clr-grey-8); */
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 0px 0px 0.5px, rgba(50, 50, 93, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1.5px 0px;
    margin-bottom: 3rem;
  }
  h4{
      color: var( --clr-primary-5);
    }
  .empty {
    text-align: center;
  }
  @media (min-width: 776px){
    flex-direction: row;
    align-items:start;
    .personal-info{
      grid-template-columns: 1fr 1fr;
    }
    .items-summary{
      margin-left: 3rem;
    }
  }
  
  
  `
export default CheckoutPage

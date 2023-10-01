import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  const [dropdown, setDropDown] = useState(false)
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>

      <div className="dropdown">
        <button onClick={() => { setDropDown(!dropdown) }} className="dropbtn">
          {myUser ? `Hi,${myUser.name}` : <AiOutlineUser className='user' />}
          <RiArrowDropDownLine />
        </button>
        {
          dropdown && <div id="myDropdown" className="dropdown-content">
            <a>{
              myUser ? (
                <button type='button' className='auth-btn' onClick={() => {
                  clearCart()
                  logout({ returnTo: window.location.origin })
                }}> Logout</button>

              ) : (
                <button type='button' className='auth-btn' onClick={loginWithRedirect}> Login </button>
              )
            }
            </a>
          </div>
        }

      </div>





    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .login-out{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .auth-btn {
    display: flex;
    align-items: end;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .auth-btn:hover, .cart-btn:hover{
    border-bottom: 2px solid var(--clr-primary-7);
  }
  .user{
    font-size: 1.5rem;
  }
  .dropbtn {
  background-color: transparent;
  color: var(--clr-grey-2);
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  border-bottom: 2px solid var(--clr-primary-7);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  background-color: var(--clr-primary-10);
  margin-top: 1rem;
  min-width: 6rem;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: var(--radius);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* .dropdown a:hover {background-color: #ddd;} */
`
export default CartButtons

import './Cart.css';
import {ListGroup} from 'react-bootstrap'
import CartItem from "./CartItem";
import {useContext, useEffect, useState} from "react";
import ChangeTheme from "./ChangeTheme";
import ThemeContext from "../context/ThemeContext";

function Cart({products, removeFromCart, changeCount}) {
  const [total, setTotal] = useState(0);
  const {theme, user} = useContext(ThemeContext);

  useEffect(() => {
    const newTotal = products.reduce((acc, product) => acc + (product.price * product.count), 0);
    setTotal(newTotal);
  }, [products]);

  return <div className={`cart-block p-3 ${theme}`}>
    <h2>Cart</h2>
    <ListGroup>
      {products.map(product => <CartItem
          key={product.id}
          product={product}
          changeCount={changeCount}
          removeFromCart={removeFromCart}/>)}
    </ListGroup>
    <div className={'text-center'}>
      <h3>Total:</h3>
      <h4 className={'text-danger'}>You are ordering {products.length} products, total is ${total}</h4>
      <p>Your order is sent to {user?.email}</p>
      <ChangeTheme />
    </div>
  </div>
}

export default Cart;
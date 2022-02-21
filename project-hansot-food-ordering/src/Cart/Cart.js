import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItems from "./CartItem";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'

const Cart = (props) =>{
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount}원`;
  console.log(cartCtx.items)
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItem = <ul className={classes["cart-container"]}>
    {cartCtx.items.map((item)=>{
      return <CartItems
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={()=>cartItemRemoveHandler(item.id)}
        onAdd={()=>cartItemAddHandler(item)}
      />
    })}
  </ul>

  return <Modal
    onClose={props.onClose}
  >
    {cartItem}
    <div>
      <span>합계</span>
      <span>{totalAmount}</span>
    </div>
    <div>
      <button onClick={props.onClose}>취소</button>
      <button className={hasItem?'active':''}>주문하기</button>
    </div>
  </Modal>
}
export default Cart
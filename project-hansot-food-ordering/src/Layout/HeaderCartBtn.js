import { useContext } from 'react';
import CartContext from '../store/cart-context';
import classes from './HeaderCartBtn.module.css'
import FoodTray from '../assets/FoodTray'

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberCartItem = items.reduce((curNum, item)=>{
    return curNum += item.amount
  }, 0)
  return <button className={classes.btn} onClick={props.onClick}>
    <span className={classes.icon}><FoodTray/></span>
    <span>주문 대기중</span>
    <span className={classes.counting}>{numberCartItem}</span>
  </button>
}
export default HeaderCartBtn
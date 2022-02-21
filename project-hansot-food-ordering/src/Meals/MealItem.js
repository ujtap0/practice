import { useContext } from "react"

import MealItemForm from "./MealItemForm"
import classes from './MealItem.module.css'
import CartContext from "../store/cart-context"

const MealItem = (props)=>{
  const cartCtx = useContext(CartContext)
  const price = `${props.price}원`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return <li className={classes['item-container']}>
    <div>
      <div className={classes['item-img-container']}><img src={props.imgUrl}/></div>
      <div className={classes['item-info']}>
        <h4>{props.name}</h4>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm
            id={props.id}
            onAddToCart = {addToCartHandler}
          />
        </div>
      </div>
    </div>
  </li>
}
export default MealItem
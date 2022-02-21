import Input from "../UI/Input";
import { useRef } from "react";
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHanlder=(event)=>{
    event.preventDefault();
    const enteredAmount= amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber)
  }
return <form onSubmit={submitHanlder} className={classes.form}>
  <Input
  ref={amountInputRef}
  label="수량"
  input={{
    id:'amount_' + props.id,
    type: 'number',
    min: '1',
    max: '99',
    step: '1',
    defaultValue: '1'
  }}
  />
  <button>추가</button>
</form>
}
export default MealItemForm;
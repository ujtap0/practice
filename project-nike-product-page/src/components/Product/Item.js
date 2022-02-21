import classes from './Item.module.css'

const ShoesItem = (props) => {
  const imgUrl = `/img/${props.name}.jpg`;
  return <li className={classes.a_product}>
    <div className={classes.img_container}>
      <img src={imgUrl}/>
    </div>
    <div className={classes.product_display}>
      <div className={classes.product_info}>
        <h2>{props.name}</h2>
        <p>{props.category}</p>
      </div>
      <div className={classes.product_price}>
        <p>{props.price}</p>
      </div>
    </div> 
  </li>
}
export default ShoesItem;
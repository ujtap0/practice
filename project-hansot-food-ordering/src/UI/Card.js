const Card = (props) => {
  return <div className={classes['item-cont']}>
    <div className={classes['item-img']}><img src={props.src}/></div>
    <div className={classes['item-text']}>
      <span>{props.name}</span>
      <span>{props.price}</span>
    </div>
  </div>
}
export default Card
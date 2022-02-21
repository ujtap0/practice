import classes from './BtnGroup.module.css'

const BtnGroup = () => {
  return <ul className={classes.btn_group}>
    <li>
      <a><img src="https://img.icons8.com/ios/50/000000/like--v1.png"/></a>
    </li>
    <li>
      <a><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-bag-interface-kiranshastry-lineal-kiranshastry.png"/></a>
    </li>
  </ul>
}
export default BtnGroup
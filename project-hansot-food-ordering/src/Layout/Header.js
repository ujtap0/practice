import classes from './Header.module.css'
import HeaderCartBtn from "./HeaderCartBtn"
import Wrapper from '../UI/Wrapper'
const Header = (props) => {
  return(<Wrapper>
    <header className={classes.header}>
      <h1><a href='#'><span className='blind'>한솥</span></a></h1>
      <HeaderCartBtn onClick={props.onShowCart}/>
    </header>
  </Wrapper>
  )
}
export default Header
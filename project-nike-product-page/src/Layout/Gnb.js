import GnbNav from "./GnbNav"
import classes from './Gnb.module.css'
import Logo from "../assets/Logo"
import Wrapper from "../UI/Wrapper"
import Search from "../components/Search/Searchs"
import BtnGroup from "./BtnGroup"

const Gnb = (props) =>{
  return <Wrapper className={classes.gnb}>
    <h1>
      <a><Logo/></a>
    </h1>
    <GnbNav/>
    <Search onShow={props.onShow}/>
    <BtnGroup/>
  </Wrapper>
}
export default Gnb
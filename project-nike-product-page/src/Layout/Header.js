import { Fragment } from 'react';
import classes from './Header.module.css';
import PreHeader from './PreHeader';
import Gnb from './Gnb';

const Header = props =>{
  return <Fragment>
    <PreHeader/> 
    <Gnb onShow={props.onShowSearch}/>
  </Fragment>

}
export default Header;
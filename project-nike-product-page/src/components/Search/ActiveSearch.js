import Modal from "../../UI/Modal"
import Search from "./Searchs"
import Logo from "../../assets/Logo"
import SuggestedKeywords from "./SuggestedKeyword"

import classes from './ActiveSearch.module.css'

const ActiveSearch = (props) => {
  return <Modal onClose={props.onClose}>
    <div className={classes.search_inner}>
      <h1>
        <Logo/>
      </h1>
      <Search className={classes.active}/>
      <button
        onClick={props.onClose}
      ><img className={classes.close} src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"/></button>
    </div>
    <div className={classes.search_container}>
      <SuggestedKeywords/>
    </div>
  </Modal>
}
export default ActiveSearch
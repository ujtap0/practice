import { useState,Fragment } from "react";
import './ListItem.css';

const ListItem=(props) => {
  const [clickedIdx, setClickedIdx] = useState(0);
  const handleClick = () => {
    props.setActiveIndex(props.idx)
    setClickedIdx(null)
  }
  const handlerTab = (e, idx) => {
    setClickedIdx(idx)
    props.handler(idx)
  }

  return <Fragment>
    <li className={props.active}>
      <h3 onClick={handleClick}><a>{props.title}</a></h3>
      {props.list.map((item, idx)=>{
        return <p
          onClick={(e)=>{handlerTab(e, idx)}}
          key={idx}
        >{item.tabitem}</p>
      })}
    </li>
    <div>
      
    </div>
  </Fragment>
}
export default ListItem;

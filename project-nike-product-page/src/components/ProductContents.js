import { useState } from 'react';
import classes from './ProductContents.module.css';
import Wrapper from '../UI/Wrapper';

import Apparel from './Product/Apparel';
import Goods from './Product/Goods';
import Shoes from './Product/Shoes';

const ProductContents=(props)=>{
  const [activeTab, setActiveTab]=useState(0)

  const activeTabHandler = (index) => {
    setActiveTab(index)
  }

  const tabContArr= [
    {
      tabTitle: (<li 
        onClick={()=>activeTabHandler(0)}
        className={activeTab === 0? classes.actived : ''}
        ><button>신발</button></li>),
      tabContent: <Shoes/>
    },{
      tabTitle: (<li 
        onClick={()=>activeTabHandler(1)}
        className={activeTab === 1? classes.actived : ''}
        ><button>의류</button></li>),
      tabContent: <Apparel/>
    },{
      tabTitle: (<li onClick={()=>activeTabHandler(2)}
      className={activeTab === 2? classes.actived : ''}
      ><button>용품</button></li>),
      tabContent: <Goods/>
    }
  ]
  return <Wrapper>
    <ul className={classes.link_area}>
      {tabContArr.map((menu)=>{
        return menu.tabTitle
      })}
    </ul>
    {tabContArr[activeTab].tabContent}
  </Wrapper>
}
export default ProductContents;
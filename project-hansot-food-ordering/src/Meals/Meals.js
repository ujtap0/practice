import { useState } from "react"
import ListItem from "./ListItem"
import Event from "./MealItem/Event";
import FormalSeries from "./MealItem/FormalSeries";
import CollectedSeries from "./MealItem/CollectedSeries";
import FriedRice from "./MealItem/FriedRice";
import Kare from "./MealItem/Kare";
import Mayo from "./MealItem/Mayo";
import MeatSeries from "./MealItem/MeatSeries";
import Premium from "./MealItem/Premium";

import classes from './Meals.module.css'
const tabConArr=[
  {
    tabTitle: '신메뉴/행사',
    tabItems:[
      {
        tabitem: '행사',
        tabContent: <Event/>
      }
    ]
  },
  {
    tabTitle: '프리미엄/고메이',
    tabItems:[
      {
        tabitem: '프리미엄',
        tabContent: <Premium/>
      }
    ]
  },
  {
    tabTitle: '사각도시락',
    tabItems:[
      {
        tabitem: "고기고기시리즈",
        tabContent: <MeatSeries/>
      },
      {
        tabitem: "모둠시리즈",
        tabContent: <CollectedSeries/>
      },
      {
        tabitem: "정식시리즈",
        tabContent: <FormalSeries/>
      },
    ]
  },
  {
    tabTitle: '보울도시락',
    tabItems:[
      {
        tabitem: "마요",
        tabContent: <Mayo/>
      },
      {
        tabitem: "카레",
        tabContent: <Kare/>
      },
      {
        tabitem: "볶음밥",
        tabContent: <FriedRice/>
      },
    ]
  },
]

const Meals = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(tabConArr[0].tabItems[0].tabContent)

  const handler=(index)=>{
    if(index>=0){
      setActiveItem(tabConArr[activeIndex].tabItems[index].tabContent)
    }
  }
  return <div className={classes.container}>
    <ul className={classes['menu-container']}>
      {tabConArr.map((item, idx) => {
        const active = idx === activeIndex ? 'active' : '' ;
        return(
          <ListItem
            key = {idx}
            title = {item.tabTitle}
            idx = {idx}
            list={item.tabItems}
            active = {active}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            handler={handler}
          />
        )
      })}
    </ul>
    <div className={classes['item-container']}>
      {activeItem}
    </div>
  </div>
}
export default Meals
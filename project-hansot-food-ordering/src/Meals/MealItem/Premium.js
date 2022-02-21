import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'p1',
    category:'premium',
    name:'매화(순살 고등어 간장구이)',
    price:'10000',
  },
  {
    id:'p2',
    category:'premium',
    name:'매화(치킨, 연어구이)',
    price:'10000',
  },
  {
    id:'p3',
    category:'premium',
    name:'진달래',
    price:'7000',
  },
]

const Premium = () => {
  return <ul>
    {DUMMY_MENU.map((item)=>{
      return <MealItem
        id = {item.id}
        name = {item.name}
        price = {item.price}
        imgUrl={`/img/product/${item.category}/${item.name}.jpg`}
      />
    })}
  </ul>
}
export default Premium
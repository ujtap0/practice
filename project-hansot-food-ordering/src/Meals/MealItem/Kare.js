import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'k1',
    category:'kare',
    name:'치즈 카레도시락',
    price:'4100',
  },
  {
    id:'k2',
    category:'kare',
    name:'돈까스 카레',
    price:'4200',
  },
]

const Kare = () => {
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
export default Kare
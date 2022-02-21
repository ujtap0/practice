import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'mt1',
    category:'meat',
    name:'돈까스도련님고기고기',
    price:'5800',
  },
  {
    id:'mt2',
    category:'meat',
    name:'새치 고기고기',
    price:'6200',
  },
  {
    id:'mt3',
    category:'meat',
    name:'탕수육도련님고기고기',
    price:'5800',
  },
]

const Meat = () => {
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
export default Meat
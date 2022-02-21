import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'c1',
    category:'collection',
    name:'숯불직화구이',
    price:'6500',
  },
  {
    id:'c2',
    category:'collection',
    name:'소불고기',
    price:'5000',
  },
  {
    id:'c3',
    category:'collection',
    name:'메가치킨제육',
    price:'7000',
  },
]

const CollectedSeries = () => {
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
export default CollectedSeries
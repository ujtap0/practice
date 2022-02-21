import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'m1',
    category:'mayo',
    name:'메가스팸마요',
    price:'5600',
  },
  {
    id:'m2',
    category:'mayo',
    name:'메가치킨마요',
    price:'5500',
  },
]

const Mayo = () => {
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
export default Mayo
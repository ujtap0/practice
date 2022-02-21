import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'fr1',
    category:'friedrice',
    name:'3종치즈 김치볶음밥',
    price:'4800',
  },
  {
    id:'fr2',
    category:'friedrice',
    name:'스팸 김치볶음밥',
    price:'4700',
  },
  {
    id:'fr3',
    category:'friedrice',
    name:'김치볶음밥',
    price:'3900',
  },
]

const FriedRice = () => {
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
export default FriedRice
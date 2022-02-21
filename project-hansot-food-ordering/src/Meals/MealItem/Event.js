import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'e1',
    category:'event',
    name:'행사 숯불직화구이 덮밥',
    price:'4900',
  },
  {
    id:'e2',
    category:'event',
    name:'행사 제육 김치 부대찌개 정식',
    price:'7200',
  },
  {
    id:'e3',
    category:'event',
    name:'행사 빅치킨마요 김치 부대찌개 정식',
    price:'6300',
  },
]

const Event = () => {
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
export default Event
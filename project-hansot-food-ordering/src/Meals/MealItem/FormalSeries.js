import MealItem from "../MealItem"
const DUMMY_MENU =[
  {
    id:'f1',
    category:'formal',
    name:'제육 김치찌개 정식',
    price:'8200',
  },
  {
    id:'f2',
    category:'formal',
    name:'제육 김치 부대찌개 정식',
    price:'8500',
  },
  {
    id:'f3',
    category:'formal',
    name:'돈치스팸 김치 부대찌개 정식',
    price:'8500',
  },
]

const FormalSeries = () => {
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
export default FormalSeries
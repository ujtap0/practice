import ShoesItem from "./Item";
import Wrapper from "../../UI/Wrapper";
import Container from "../../UI/Container";
const Shoes = () => {
  const productList = [
    {
      id: 's1',
      name: '나이키 에어맥스 AP',
      category: '남성 신발',
      colorway: '3 컬러',
      price: '119,000'
    },
    {
      id: 's2',
      name: '나이키 에어 포스 1 GORE-TEX',
      category: '남성 신발',
      colorway: '1 컬러',
      price: '189,000'
    },
    {
      id: 's3',
      name: '나이키 에어 줌 펄스',
      category: '성인공용 신발',
      colorway: '2 컬러',
      price: '139,000'
    },
  ]
  
  const itemsList = productList.map((item)=>{
    return <ShoesItem
      key={item.id}
      id={item.id}
      name={item.name}
      category={item.category}
      colorway={item.colorway}
      price={item.price}
    />
  })
  
  return <Wrapper>
    <Container>
      {itemsList}
    </Container>
  </Wrapper>
}
export default Shoes
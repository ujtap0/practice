import ApparelItem from './Item'
import Wrapper from '../../UI/Wrapper'
import Container from "../../UI/Container";
const Apparel = () => {

  const productList = [
    {
      id: 'a1',
      name: '나이키 스포츠웨어 클럽',
      category: '남성 프렌치 테리 크루 AS',
      price: '69,000'
    },
    {
      id: 'a2',
      name: '나이키 스포츠웨어 스포츠 에센셜+ 멀티 뮤츄라',
      category: '남성 플리스 크루 AS',
      price: '79,000'
    },
    {
      id: 'a3',
      name: '나이키 스포츠웨어',
      category: '남성 프렌치 테리 스웻셔츠 AS',
      price: '99,000'
    },
  ]
  const itemsList = productList.map((item)=>{
    return <ApparelItem
      key={item.id}
      id={item.id}
      name={item.name}
      category={item.category}
      price={item.price}
    />
  })

  return <Wrapper>
    <Container>
      {itemsList}
    </Container>
  </Wrapper>
}
export default Apparel;
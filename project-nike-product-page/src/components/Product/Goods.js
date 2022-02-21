import GoodslItem from './Item'
import Wrapper from '../../UI/Wrapper'
import Container from "../../UI/Container";
const Goods = () => {
  const productList = [
    {
      id: 'g1',
      name: '나이키 스포츠웨어 2.0',
      category: '리버서블 넥 웨어',
      colorway: '1 컬러',
      price: '27,000'
    },
    {
      id: 'g2',
      name: '나이키 엘리멘탈 HBR',
      category: '백팩',
      colorway: '3 컬러',
      price: '45,000'
    },
    {
      id: 'g3',
      name: '나이키 헤리티지',
      category: '웨이스트팩(스몰)',
      colorway: '3 컬러',
      price: '29,000'
    },
  ]
  const itemsList = productList.map((item)=>{
    return <GoodslItem
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
export default Goods;
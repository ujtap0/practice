import { Fragment } from 'react'
import classes from './SuggestedKeyword.module.css'

const SuggestedKeywords = () =>{
  const popularKeywords = ['패딩', '에어맥스 던', '스우시', '겨울 모자', '플리스']
  return <Fragment>
  <p className={classes.text}>추천 검색어</p>
  <ul className={classes.list}>
    {popularKeywords.map((item)=>{
      return <li><a>{item}</a></li>
    })}
  </ul>
  </Fragment>

}
export default SuggestedKeywords;
import classes from './Search.module.css'

const Search = (props) => { 
  
  return (
  <div className={`${classes.search_wrapper} ${props.className}`}>
    <form onSubmit={props.onShow}>
      <button>
        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png"/>
      </button>
      <input
        value="검색"
        onClick={props.onShow}
      />
    </form>
  </div>
  )
}
export default Search
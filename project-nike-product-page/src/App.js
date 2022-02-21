import { Fragment, useState } from 'react'
import Header from './Layout/Header';
import ActiveSearch from './components/Search/ActiveSearch';
import SectionHeader from './Layout/SectionHeader';
import ProductContents from './components/ProductContents';

function App() {
  const [searchIsShown, setSearchIsShown] = useState(false)
  const showSearchHanlder = () => {
    setSearchIsShown(true);
  }
  const hideSearchHandler = () => {
    setSearchIsShown(false)
  }
  return (
    <Fragment>
      <Header onShowSearch={showSearchHanlder}/>
      {searchIsShown && <ActiveSearch onClose={hideSearchHandler}/>}
      <section className='section-header'>
        <SectionHeader/>
      </section>
      <section classNamd="contents-body">
        <ProductContents/>
      </section>
    </Fragment>
  );
}

export default App;

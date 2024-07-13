import { createContext, useState } from 'react';
import './App.css'
import './app.scss'
import CoffeeView from './views/Coffee-View'
export const FilterProductContext = createContext({
  filterValue:'All',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setfilterValue:(a: string) => {},
});
function App() {
  const [filterProduct, setFilterProduct] = useState<string>('All');
  const changeFilterValue = (value:string)=>{
    setFilterProduct(value);
  }
  return (
    <FilterProductContext.Provider value={{ filterValue: filterProduct, setfilterValue: changeFilterValue }}>
    <div className='MainContainer'>
     <div>
       <div className="intro_container">
           <p>Our Collection</p>
           <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
           <div>
            <button className={filterProduct === 'All'?'active':''} onClick={()=>setFilterProduct('All')}>All Products</button>
            <button className={filterProduct === 'Avaliable'?'active':''}  onClick={()=>setFilterProduct('Avaliable')}>Available Now</button>
           </div>
           <CoffeeView/>
        </div>
    </div>
    </div>
    </FilterProductContext.Provider>
  )
}

export default App

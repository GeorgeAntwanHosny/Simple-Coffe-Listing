import { createContext, useState } from 'react';
import './App.css'
import './app.scss'
import CoffeeView from './views/Coffee-View'
interface FilterProductContextType {
  filterValue: string;
  setFilterValue: (value: string) => void;
}

export const FilterProductContext = createContext<FilterProductContextType>({
  filterValue: 'All',
  setFilterValue: () => {}, // No-op function as default
});
function App() {
  const [filterProduct, setFilterProduct] = useState<string>('All');
  const changeFilterValue = (value:string)=>{
    setFilterProduct(value);
  }
  return (
    <FilterProductContext.Provider value={{ filterValue: filterProduct, setFilterValue: changeFilterValue }}>
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

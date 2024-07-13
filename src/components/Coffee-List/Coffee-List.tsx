import React, { useContext } from "react";
import { Coffee } from "../../models/Coffee";
import CoffeeItem from "../Coffee-Item/Coffee-Item";
import './Coffee-List.scss'
import { FilterProductContext } from "../../App";
interface CoffeeListProps {
  coffeeData:Coffee[],
}

const CoffeeList:React.FC<CoffeeListProps>= ({coffeeData})=>{
  const filterProductBy = useContext(FilterProductContext);
   const coffeeDataFiltred = ():Coffee[] => {
     if(filterProductBy.filterValue ==='All'){
      return coffeeData;
     }else{
      return [...coffeeData.filter(coffe=>coffe.available === true)];
     }
   }

    return ( 
     <>
        <div className="coffeeListContainer">    
         {coffeeDataFiltred().map((coffee)=><CoffeeItem coffee={coffee} key={coffee.id}/>)}
        </div>
     </>
    )
};

export default CoffeeList;
import { CustomResponse } from "../models/CustomResponse";

export const getAllCoffee = async():Promise<CustomResponse>=>{
 
  
  try {
    const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');

   if(response.ok)
   {
    const coffee_data = await response.json();
    return {
        data:coffee_data,
        isSuccess:true,
        isFail:false,
        message:'sucessfully get all data about coffee.'
    }
   }else{
    return {
        data:[],
        isSuccess: false ,
        isFail:true,
        message:'Fail to get all data about coffee.'
    }
   }
  } catch ( error) {
    console.log('Error: ', error);
    return {
        data: [],
        isSuccess:true,
        isFail:false,
        message:'Fail to get all data about coffee.'
    }
  }    
}
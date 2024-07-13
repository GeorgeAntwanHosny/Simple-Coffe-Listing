import React, { useEffect, useState } from "react";
import CoffeeList from "../components/Coffee-List/Coffee-List";
import { getAllCoffee } from "../services/coffee-service";
import { Coffee } from "../models/Coffee";
import Loader from "../components/Loader/Loader";

const CoffeeView = () => {
    type stateType = {
        isLoad: boolean,
        isSuccess: boolean,
        isFail: boolean,
        message: string,
        coffee_data: Coffee[]
    };

    const [stateData, setStateData] = useState<stateType>({
        isLoad: true,
        isSuccess: false,
        isFail: false,
        message: '',
        coffee_data: []
    });
    const fetchData = async () => {
        try {
            const data = await getAllCoffee();
            console.log("data: ", data);

            // Update state correctly using functional update to ensure the latest state
            setStateData(prevState => ({
                ...prevState,
                isLoad: false,
                coffee_data: data.data,
                isFail: data.isFail,
                isSuccess: data.isSuccess,
                message: data.message
            }));
        } catch (error) {
            // Handle any errors from getAllCoffee() if needed
            console.error('Error fetching data:', error);
            setStateData(prevState => ({
                ...prevState,
                isLoad: false,
                coffee_data: [],
                isFail: true,
                isSuccess: false,
                message: "Fail to get coffe data."
            }));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {/* <CoffeeList coffeeData={stateData.coffee_data} /> */}
            
            {stateData.isLoad?<Loader/>: <CoffeeList coffeeData={stateData.coffee_data} />}
        </>
    );
};

export default CoffeeView;

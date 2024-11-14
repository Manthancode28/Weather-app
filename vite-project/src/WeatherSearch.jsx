// In this file whole code is combine
// Code is divided into component
// Waether Search Box  and  Weather Info Box

import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import WeatherInfo from "./WeatherInfo";

export default function Search() {
    let [weatherInfo,setweatherInfo] = useState({  //Initialize 
        city : "Delhi",
        temp : 25.61,
        feels_like : 26.21,
        humidity : 60,
        temp_max : 25.61,
        temp_min : 25.61
    });

    //weatherInfo is state variable passes initial information to WeatherInfo 

    
    // updateinfo called when search button is clicked through handleclick define SearchBox
    // It take newData about city entered by user
    // newData is store in newInfo
    // It passes to weatherInfo by using state function setweatherinfo
    // weatherInfo display new information 

    function updateinfo (newInfo){
        setweatherInfo(newInfo);
    }

    // Display Both
    return (
        <>
        <div>
            <SearchBox updateinfo={updateinfo}></SearchBox>  
            <WeatherInfo info = {weatherInfo}></WeatherInfo>
        </div>
        </>
    )
}
import TextField from '@mui/material/TextField';  // Import TextField from Material UI
import Button from '@mui/material/Button';  // Import Button from Material UI
import "./SearchBox.css";
import { useState } from 'react';
import PropTypes from 'prop-types'; 

export default function SearchBox({updateinfo}){
    let [city,setCity] = useState("");  // Define state to update city from search field
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";  // Use API from openweather API
    const API_KEY = "48a86180c140dac4f9ec45feebf73b05";
   

    
        let  getWeather = async ()=>{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  // featch city and key from API 
    
            let data = await response.json(); // It give data and I have to catch required info from data and store in result
            let result = {
                city : city,
                temp : data.main.temp,
                feels_like : data.main.feels_like,
                humidity : data.main.humidity,
                temp_max : data.main.temp_max,
                temp_min : data.main.temp_min
            }; 
            console.log(result);
    
            return result;   // This function return result in which all info about city is store
        }
  
    let handleChange = (event)=> {
        setCity(event.target.value);  // Handeling input field
    }

    let handleClick = async(event) => {   
        event.preventDefault();  // To prevent default when form is submitted
        console.log(city);
        let newData =  await getWeather();  // Call to getWeather when user enter new city, it will take info about new city
                                            // from API , hence it is asynchronous
        updateinfo(newData);  // It's prop , It passes newInfo Weather Info in WeatherSearch
    }
    return (
        <>
            <div className="search-box">
                <form onSubmit={handleClick} >
                    <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange}/>  
                    <br/><br/>
                    <Button variant="contained"  type='submit'>Search</Button>
                </form>
            </div>
        </>
    );
}

SearchBox.propTypes = {
    updateinfo: PropTypes.func.isRequired
};
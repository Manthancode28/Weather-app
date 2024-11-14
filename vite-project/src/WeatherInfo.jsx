import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./WeatherInfo.css";
import PropTypes from 'prop-types'; // Import prop-types

// Display info comes from weatherInfo which is store in prop,
// prop act like argument which passes info

export default function WeatherInfo({info}){
    //  let info = {
    //     city : "Delhi",
    //     temp : 25.61,
    //     feels_like : 26.21,
    //     humidity : 60,
    //     temp_max : 25.61,
    //     temp_min : 25.61
    // };
    let SUMMER_URL = "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?cs=srgb&dl=pexels-brett-sayles-912364.jpg&fm=jpg";
    let RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/003/482/458/small_2x/umbrella-with-heavy-rain-rainy-season-paper-art-style-vector.jpg";
    let COLD_URL = "https://wallpapers.com/images/hd/winter-season-pictures-k8r6yx0ymbn60rtj.jpg";
    return (
        <>
        <h1>Weather Info</h1>
        <div className="info-box">
                <Card sx={{ maxWidth: 345 }} className='card-box'>
                <CardMedia
                    className='weather-image'
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        
                            info.humidity > 80 ? RAIN_URL : info.temp > 20 ? SUMMER_URL : COLD_URL  
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temerature : {info.temp}</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Max Temp : {info.temp_max}</p>
                        <p>Min Temp : {info.temp_min}</p>
                        <p>In delhi weather is feel like  : {info.feels_like}</p>
                    </Typography>
                </CardContent>
                </Card>
        </div>
        </>
    )
}

// Prop types validation
WeatherInfo.propTypes = {
    info: PropTypes.shape({
        city: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        feels_like: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired
    }).isRequired
};
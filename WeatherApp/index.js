import styles from './WeatherApp.module.scss'
import SearchBox from "../SearchBox"
import InfoBox from "../InfoBox";
import { useState } from 'react';

function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })


    const updateWeather=(newInfo)=>{
       setWeatherInfo(newInfo);
    }
    return(
<div className={styles.WeatherApp}>
    <h2>Weather App By CoderWorld</h2>
    <SearchBox updateInfo={updateWeather}/>
    <InfoBox info={weatherInfo}/>
</div>
    );
}
export default WeatherApp;
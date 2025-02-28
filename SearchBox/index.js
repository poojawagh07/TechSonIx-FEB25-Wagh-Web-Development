import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./SearchBox.module.scss";
import { useState } from 'react';

function SearchBox({updateInfo}){
    const[city,setCity]=useState(" ");
    const[error,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="09adf4bcc84a5aad024b8e24fc98da3b";

    const getWeatherInfo= async()=>{
        try{
            const response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            const jsonResponse= await response.json();
             console.log(jsonResponse)
             const result={
               city:city,
               temp:jsonResponse.main.temp,
               tempMin:jsonResponse.main.temp_min,
               tempMax:jsonResponse.main.temp_max,
               humidity:jsonResponse.main.humidity,
               feelsLike:jsonResponse.main.feelsLike,
               weather:jsonResponse.weather[0].description,
             }
              console.log(result);
              return result;
        } catch(err){
          throw err;
        }
    }

    const handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    const handleSubmit= async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity(" ");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch (err){
            setError(true);
        }
        
    }


    return(
        <div className={styles.SearchBox}>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p className={styles.error}>No Such Place Available In Our API !</p>}
            </form>
        </div>
    );
}
 export default SearchBox;
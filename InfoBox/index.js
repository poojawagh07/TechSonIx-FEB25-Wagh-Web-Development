import Card from '@mui/material/Card';      
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  styles  from './InfoBox.module.scss';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function InfoBox({info}){
    
        const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
        const RAIN_URL="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"



    return(
    <div className={styles.InfoBox}>
        <div className={styles.card}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>The Weather can be discribed as <b><i>{info.weather}</i></b> and feels like={info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}
export default InfoBox;
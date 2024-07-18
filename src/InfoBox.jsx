import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AirIcon from "@mui/icons-material/Air";

export default function InfoBox({ info }) {
  let haze_URL =
    "https://imgs.search.brave.com/ra-Wd-MN_ai_D0MuOP1vBoKqGvjxPWRxjbe5BjnrzUQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMmg4/aHJhbXUzeHFvaC5j/bG91ZGZyb250Lm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L0hh/enktU2tpZXMtc2Nh/bGVkLndlYnA";
  let cold_URL =
    "https://imgs.search.brave.com/t1Sa8QGkdr5taJXoED-ca29anXNEKpLK558Pk0Xiypo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY0/NTQyNjY4L3Bob3Rv/L2ZyZWV6aW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz04/aFZQNEJJdE94aVZh/UW9yc2pMNURUQ0pX/UEZnTDAyY1p5YW1V/dlhkd0IwPQ";
  let hot_URL =
    "https://imgs.search.brave.com/En3pyh3h1MQZFwFCl9JHUQo5sWnscVLuFulM5wUD9sk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzEwLzg1LzMy/LzM2MF9GXzUxMDg1/MzI1Nl9OZEdpN21o/eklMUGJvcnNjRjdD/dE5lUXZVd011Zkx4/Mi5qcGc";
  let rain_URL =
    "https://imgs.search.brave.com/gSWPA4pyfDLPH9M18Cvmqoxj3qKJmm22vlXmCR5cp88/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wZW9wbGUtd2l0/aC11bWJyZWxsYS1y/YWlueS1kYXlzLXdp/bnRlci1zZWFzb24t/YmlsYmFvLWJhc3F1/ZS1jb3VudHJ5LXNw/YWluXzczNDg1LTU5/MjYuanBnP3NpemU9/NjI2JmV4dD1qcGc";
  // let info = {
  //   city: "Delhi",
  //   feelsLike: 43.05,
  //   humidity: 63,
  //   temp: 36.05,
  //   tempMax: 36.05,
  //   tempMin: 36.05,
  //   weather: "haze",
  // };

  let init_URL = "";
  let icon = "";

  if (info.humidity > 80 && info.temp > 20) {
    init_URL = rain_URL;
    icon = <BeachAccessIcon />;
  } else if (info.temp >= 15) {
    init_URL = hot_URL;
    icon = <WbSunnyIcon />;
  } else if (info.temp < 15) {
    init_URL = cold_URL;
    icon = <AcUnitIcon />;
  } else {
    init_URL = haze_URL;
    icon = <AirIcon />;
  }

  return (
    <div className="InfoBox">
      <h3>Weather for {info.city}</h3>
      <Card sx={{ width: 300 }}>
        <CardMedia
          sx={{ height: 170 }}
          image={init_URL}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;{icon}
          </Typography>
          <hr />
          <br />

          <Typography variant="body3" color="text.secondary" component="span">
            <div className="information">
              <div>Weather : {info.weather}</div>
              <div>Temperature : {info.temp}&deg;C</div>
              <div>Feels Like : {info.feelsLike}&deg;C</div>
              <div>Humidity : {info.humidity}</div>
              <div>Minimum Temperature : {info.tempMin}&deg;C</div>
              <div>Maximum Temperature : {info.tempMax}&deg;C</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

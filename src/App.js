import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TranslateIcon from '@material-ui/icons/Translate';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Box,
  Card
} from '@mui/material';
import { CardContent, CardMedia, makeStyles, TextField } from '@material-ui/core';
import { CartesianGrid, LineChart, BarChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ComposedChart, ReferenceLine, Brush, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { updateCity } from './actions/updateCity';
import { updateWidth } from './actions/updateWidth';
import { updateHeight } from './actions/updateHeight';
import { updatePosition } from './actions/updatePosition';
import { loadDataByCity, loadDataByPosition } from './actions/loadData';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  searchBox: {
    display: 'flex',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const city = useSelector(state => state.city.city);
  const width = useSelector(state => state.size.width);
  const height = useSelector(state => state.size.height);
  const position = useSelector(state => state.position.position);
  const currentData = useSelector(state => state.data.currentData);
  const dailyData = useSelector(state => state.data.dailyData);
  const KEY = '1e924473a0f9248c787e8b108763ab3e';
  const [map, setMap] = useState(null);

  const updateSize = () => {
    dispatch(updateWidth(window.innerWidth));
    dispatch(updateHeight(window.innerHeight));
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loadDataByCity(city));
    dispatch(updateCity(''));
  }

  const onCLickGeoHandler = (event) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      dispatch(updatePosition([position.coords.latitude, position.coords.longitude]));
      dispatch(loadDataByPosition([position.coords.latitude, position.coords.longitude]));
    });
  }

  useEffect(() => {
    dispatch(loadDataByCity('New York'));
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (map) {
    map.flyTo(position);
  }

  return (
    <Router>
      <AppBar position='fixed' width='100%'>
        <Container fixed>
          <Toolbar>
            <Typography variant='h5' className={classes.title}>Теперича о погоде</Typography>
            <Button color='inherit' variant='outlined' component={Link} to="/about">И о сайте</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column',}}>
      <main style={{flex: '1 1 auto', width: '100%',}}>
        <Paper className={classes.mainFeaturesPost}
        style={{background: '#faa'}}>
          <Container maxWidth='md'>
            <Box className={classes.searchBox}>
              <Typography variant='h5'>
                Узнать погоду
              </Typography>
              <form onSubmit={onSubmitHandler} style={{display: 'flex', alignItems: 'stretch',}}>
                <TextField type='text' value={city} onChange={event => dispatch(updateCity(event.target.value))} name='city' id="outlined-basic" label="По городу" variant="outlined" style={{margin: '.5rem', padding:'..1rem', minWidth: '6rem'}} />
                <Button type='submit' variant='contained' style={{margin: '.5rem', padding:'..1rem',}}><SearchIcon /></Button>
                <Button variant='outlined' onClick={onCLickGeoHandler} style={{margin: '.5rem', padding:'..1rem',}}><MyLocationIcon /></Button>
              </form>
            </Box>
          </Container>
        </Paper>
        <MapContainer whenCreated={setMap} center={position} zoom={10} scrollWheelZoom={false}  style={{height: '25vh', width: '100%'}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
        {Object.keys(currentData).length > 0 ?
          <Card variant="outlined" style={{margin: '2rem'}} >
            <CardContent style={{display: 'flex',}}>
            <img src={`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} />
            <div>
            <Typography variant='h6'>
              {'Температура: ' + Math.round(currentData.main.temp - 273.15) + '°C'}
            </Typography>
            <Typography variant='p'>
              {'Влажность: ' + currentData.main.humidity + '%'}
              <br />
              {'Облачность: ' + currentData.clouds.all + ' %'}
              <br />
              {'Скорость ветра: ' + currentData.wind.speed + ' м/с'}
            </Typography>
            </div>
            </CardContent>
          </Card>
          :
          null
        }
        <div style={{height: '25vh', width: '100%'}}>
        <ResponsiveContainer>
          <ComposedChart data={dailyData} margin={{top: 5, right: 32, left: 0, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke='#000'/>
          <Brush dataKey='dt' height={30} stroke="#8884d8"/>
          <Bar dataKey="humidity" fill="#82ca9d" />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          </ComposedChart>
        </ResponsiveContainer>
        </div>
      </main>
      <footer>
        <Paper>
          FOTER
        </Paper>
      </footer>
      </div>
      <Switch>
        {
        //<Route path='/about' component={<h1>About</h1>} />
        }
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
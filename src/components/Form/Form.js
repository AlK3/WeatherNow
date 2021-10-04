import React from 'react';
import { Container, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataByCity, loadDataByPosition } from '../../actions/loadData';
import { updateCity } from '../../actions/updateCity';
import { updatePosition } from '../../actions/updatePosition';
import { StyledPaper } from './StyledPaper';
import { StyledBox } from './StyledBox';
import { BlueButton, StyledButton } from './StyledButton';
import { StyledForm } from './StyledForm';

export const Form = () => {
  const dispatch = useDispatch();
  const city = useSelector(state => state.city.city);

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

  return (
    <StyledPaper>
      <Container maxWidth='md'>
        <StyledBox>
          <Typography variant='h5'>
            Узнать погоду
          </Typography>
          <StyledForm onSubmit={onSubmitHandler} style={{display: 'flex', alignItems: 'stretch',}}>
            <TextField type='text' value={city} onChange={event => dispatch(updateCity(event.target.value))} name='city' id="outlined-basic" label="По городу" variant="outlined" style={{margin: '.5rem', padding:'..1rem', minWidth: '6rem'}} />
            <BlueButton type='submit' variant='contained'><SearchIcon /></BlueButton>
            <StyledButton variant='outlined' onClick={onCLickGeoHandler}><MyLocationIcon /></StyledButton>
          </StyledForm>
        </StyledBox>
      </Container>
    </StyledPaper>
  );
}
import React from 'react';
import { Container, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataByCity, loadDataByPosition } from '../../store/loadData';
import { StyledPaper } from './StyledPaper';
import { StyledBox } from './StyledBox';
import { BlueButton, StyledButton } from './StyledButton';
import { StyledForm } from './StyledForm';
import { updateCity } from '../../store/cityReducer';
import { updatePosition } from '../../store/positionReducer';
import { useTranslation } from 'react-i18next';
import '../../i18next';

export const Form = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const city = useSelector(state => state.city.city);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if ('' !== city) {
      dispatch(loadDataByCity(city));
      dispatch(updateCity(''));
    }
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
            {t('form.title')}
          </Typography>
          <StyledForm onSubmit={onSubmitHandler} style={{display: 'flex', alignItems: 'stretch',}}>
            <TextField type='text' value={city} onChange={event => dispatch(updateCity(event.target.value))} name='city' id="outlined-basic" label={t('form.text')} variant="outlined" style={{margin: '.5rem', padding:'..1rem', minWidth: '6rem'}} />
            <BlueButton type='submit' variant='contained'><SearchIcon /></BlueButton>
            <StyledButton variant='outlined' onClick={onCLickGeoHandler}><MyLocationIcon /></StyledButton>
          </StyledForm>
        </StyledBox>
      </Container>
    </StyledPaper>
  );
}
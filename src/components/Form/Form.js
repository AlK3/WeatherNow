import React from 'react';
import { Container, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataByCity, loadDataByPosition } from '../../store/loadData';
import { StyledPaper } from './Paper.styles';
import { StyledBox } from './Box.styles';
import { StyledForm } from './Form.styles';
import { updateCity } from '../../store/cityReducer';
import { updatePosition } from '../../store/positionReducer';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { ContainedButton, TextButton } from '../Button/Button.styles';
import { Heading } from '../Heading/Heading.styles';

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
          <Heading variant='h5'>
            {t('form.title')}
          </Heading>
          <StyledForm onSubmit={onSubmitHandler} style={{display: 'flex', alignItems: 'stretch',}}>
            <TextField type='text' value={city} onChange={event => dispatch(updateCity(event.target.value))} name='city' id="outlined-basic" label={t('form.text')} variant="outlined" style={{margin: '.5rem', padding:'..1rem', minWidth: '6rem'}} />
            <ContainedButton type='submit' variant='contained'><SearchIcon /></ContainedButton>
            <TextButton variant='outlined' onClick={onCLickGeoHandler}><MyLocationIcon /></TextButton>
          </StyledForm>
        </StyledBox>
      </Container>
    </StyledPaper>
  );
}
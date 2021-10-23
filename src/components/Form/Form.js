import React from 'react';
import { Container, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { StyledPaper } from './Paper.styles';
import { StyledBox } from './Box.styles';
import { StyledForm } from './Form.styles';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { ContainedButton, TextButton } from '../Button/Button.styles';
import { Heading } from '../Heading/Heading.styles';

import { useStore } from 'effector-react';
import { $city, $error, loadDataByCity, loadDataByPosition, submitCity, changedCity } from '../../model';

export const Form = () => {
  const {t} = useTranslation();
  const city = useStore($city);
  const error = useStore($error);

  const onCLickGeoHandler = (event) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadDataByPosition({ position: [position.coords.latitude, position.coords.longitude] });
    });
  }

  return (
    <StyledPaper>
      <Container maxWidth='md'>
        <StyledBox>
          <Heading variant='h5'>
            {t('form.title')}
          </Heading>
          <StyledForm onSubmit={submitCity} style={{display: 'flex', alignItems: 'stretch',}}>
              <TextField type='text' value={city} onChange={event => changedCity(event.target.value)} name='city' id="outlined-basic" label={error ? error : t('form.text')} variant="outlined" style={{margin: '.5rem', padding:'..1rem', minWidth: '6rem'}} />
            <ContainedButton type='submit' variant='contained'><SearchIcon /></ContainedButton>
            <TextButton variant='outlined' onClick={onCLickGeoHandler}><MyLocationIcon /></TextButton>
          </StyledForm>
        </StyledBox>
      </Container>
    </StyledPaper>
  );
}
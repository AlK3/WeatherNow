import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { StyledContent } from './Content.styles';
import { StyledCard } from './Card.styles';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { Heading } from '../Heading/Heading.styles';

export const Forecast = () => {
  const {t} = useTranslation();
  const currentData = useSelector(state => state.data.currentData);

  return (
    <>
      {Object.keys(currentData).length > 0 ?
        <StyledCard variant='outlined'>
          <StyledContent>
            {currentData.cod === 200 ?
              <>
                <img src={`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} />
                <div>
                  <Heading>
                    {t('forecast.temp') + Math.round(currentData.main.temp - 273.15) + '°C'}
                  </Heading>
                  <Typography variant='p'>
                    {t('forecast.humidity') + currentData.main.humidity + '%'}
                    <br />
                    {t('forecast.cloud') + currentData.clouds.all + ' %'}
                    <br />
                    {t('forecast.wind') + currentData.wind.speed + t('forecast.ms')}
                  </Typography>
                </div>
              </>
              :
              <>
                <Typography variant='p'>
                  {t('forecast.404')}
                </Typography>
              </>
            }
          </StyledContent>
        </StyledCard>
        :
        null
      }
    </>
  );
}
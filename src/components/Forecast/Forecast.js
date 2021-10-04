import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { StyledContent } from './StyledContent';
import { StyledCard } from './StyledCard';

export const Forecast = () => {
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
              </>
              :
              <>
                <Typography variant='p'>
                  Город не найден, перезагрузите.
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
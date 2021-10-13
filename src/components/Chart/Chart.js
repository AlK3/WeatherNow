import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { 
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';
import { StyledChart } from './Chart.styles';

export const Chart = () => {
  const {t} = useTranslation();
  const dailyData = useSelector(state => state.data.dailyData);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center',}}>
          <Typography style={{color: '#4275db', margin: '.2rem',}}>{t('chart.humidity')}</Typography>
          <Typography style={{color: '#db5942', margin: '.2rem',}}>{t('chart.temp')}</Typography>
      </div>
      <StyledChart>
        <ResponsiveContainer>
          <ComposedChart data={dailyData} margin={{top: 5, right: 32, left: 0, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <ReferenceLine y={0} stroke='#000'/>
          <Brush dataKey='dt' height={30} stroke="#dbdbdb" />
          <Bar dataKey="humidity" stroke="#4275db" fillOpacity={0.6} fill="#4275db" />
          <Area type="monotone" dataKey="temp" stroke="#db5942" fillOpacity={0.4} fill="#db5942" />
          </ComposedChart>
        </ResponsiveContainer>
      </StyledChart>
    </>
  );
}
import React from 'react';
import { Typography } from '@material-ui/core';
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
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { StyledChart } from './Chart.styles';
import { useStore } from 'effector-react';
import { $data } from '../../model';

export const Chart = () => {
  const {t} = useTranslation();
  const dailyData = useStore($data).dailyData;

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center',}}>
          <Typography style={{color: '#56a7df', margin: '.2rem',}}>{t('chart.humidity')}</Typography>
          <Typography style={{color: '#ff745c', margin: '.2rem',}}>{t('chart.temp')}</Typography>
      </div>
      <StyledChart>
        <ResponsiveContainer>
          <ComposedChart data={dailyData} margin={{top: 5, right: 32, left: 0, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke='#000'/>
          <Brush dataKey='dt' height={30} stroke="#dbdbdb" />
          <Bar dataKey="humidity" stroke="#295bc7" fillOpacity={0.6} fill="#56a7df" />
          <Area type="monotone" dataKey="temp" stroke="#ff745c" fillOpacity={0.4} fill="#ff745c" />
          </ComposedChart>
        </ResponsiveContainer>
      </StyledChart>
    </>
  );
}
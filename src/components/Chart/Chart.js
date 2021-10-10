import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { StyledChart } from './Chart.styles';

export const Chart = () => {
  const dailyData = useSelector(state => state.data.dailyData);

  return (
    <StyledChart>
      <ResponsiveContainer>
        <ComposedChart data={dailyData} margin={{top: 5, right: 32, left: 0, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke='#000'/>
        <Brush dataKey='dt' height={30} stroke="#dbdbdb" />
        <Bar dataKey="humidity" stroke="#4275db" fillOpacity={0.6} fill="#4275db" />
        <Area type="monotone" dataKey="temp" stroke="#db5942" fillOpacity={0.4} fill="#db5942" />
        </ComposedChart>
      </ResponsiveContainer>
    </StyledChart>
  );
}
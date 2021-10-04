import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataByPosition } from '../actions/loadData';
import { Chart } from '../components/Chart/Chart';
import { Forecast } from '../components/Forecast/Forecast';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Map } from '../components/Map/Map';

export const Weather = () => {
  const dispatch = useDispatch();
  const position = useSelector(state => state.position.position);
  
  useEffect(() => {
    dispatch(loadDataByPosition(position));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Form />
        <Map />
        <Forecast />
        <Chart />
      </Main>
    </>
  );
}
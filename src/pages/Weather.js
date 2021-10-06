import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataByPosition } from '../store/loadData';
import { Chart } from '../components/Chart/Chart';
import { Forecast } from '../components/Forecast/Forecast';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { Map } from '../components/Map/Map';

import { Loader } from '../components/Loader/Loader';

export const Weather = () => {
  const dispatch = useDispatch();
  const position = useSelector(state => state.position.position);
  
  useEffect(() => {
    dispatch(loadDataByPosition(position));
  }, []);
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>
      <Main>
        <Suspense fallback={<></>}>
          <Form />
        </Suspense>
        <Map />
        <Suspense fallback={<Loader />}>
          <Forecast />
          <Chart />
        </Suspense>
      </Main>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
}
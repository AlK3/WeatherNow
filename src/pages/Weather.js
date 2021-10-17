import React, { useEffect, Suspense } from 'react';
import { Chart } from '../components/Chart/Chart';
import { Forecast } from '../components/Forecast/Forecast';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { Map } from '../components/Map/Map';
import { Loader } from '../components/Loader/Loader';
import { useStore } from 'effector-react';
import { $position, loadDataByPosition } from '../model';

export const Weather = () => {
  const position = useStore($position);
  
  useEffect(() => {
    loadDataByPosition({ position: position });
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
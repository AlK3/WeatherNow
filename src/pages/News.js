import React from 'react';
import { Spacer } from '../components/Spacer/Spacer';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';


export const News = () => {
  return (
    <>
      <Header />
      <Main>
        <Spacer margin={5} />
      </Main>
      <Footer />
    </>
  );
}
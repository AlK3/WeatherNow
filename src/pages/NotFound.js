import React from 'react';
import { Spacer } from '../components/Spacer/Spacer';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';


export const NotFound = () => {
  return (
    <>
      <Header />
      <Main>
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '80px',
            margin: '0'
          }}>404</h1>
          <h2>не найдено</h2>
        </div>
      </Main>
      <Footer />
    </>
  );
}
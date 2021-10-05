import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import '../i18next';

export const About = () => {
  const {t} = useTranslation();


  const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
  `;

  return (
    <>
      <Header />
      <Main>
        <StyledAbout>
          <Typography variant='h6'>{t('about.text')}</Typography>
          <Button component={Link} to="/">{t('about.button')}</Button>
        </StyledAbout>
      </Main>
      <Footer />
    </>
  );
}
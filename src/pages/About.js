import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import '../i18next';
import { Loader } from '../components/Loader/Loader';
import { Heading } from '../components/Heading/Heading.styles';
import { TextButton } from '../components/Button/Button.styles';

export const About = () => {
  const {t} = useTranslation();


  const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    padding: 1rem;
  `;

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Main>
        <StyledAbout>
          <Heading>{t('about.title')}</Heading>
          <Typography component='p'>{t('about.text')}</Typography>
          <TextButton component={Link} to="/">{t('about.button')}</TextButton>
        </StyledAbout>
      </Main>
      <Footer />
    </Suspense>
  );
}
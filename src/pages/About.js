import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import '../i18next';
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
    <>
      <Header />
      <Main>
        <StyledAbout>
          <Card>
            <CardContent>
              <Heading>{t('about.title')}</Heading>
              <Typography component='p'>{t('about.text')}</Typography>
            </CardContent>
            <CardActions>
            <TextButton component={Link} to="/">{t('about.button')}</TextButton>
            </CardActions>
          </Card>
        </StyledAbout>
      </Main>
      <Footer />
    </>
  );
}
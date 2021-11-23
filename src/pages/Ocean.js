import React from 'react';
import { Heading } from '../components/Heading/Heading.styles';
import { Spacer } from '../components/Spacer/Spacer';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { useTranslation } from 'react-i18next';
import '../i18next';

export const Ocean = () => {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Main>
        <Spacer margin={5} />
        <Heading>{t('ocean.header')}</Heading>
        <p>{t('ocean.about')}</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='https://meteoinfo.ru/images/sea/sstdec.png' style={{ width: '80vw' }} />
          <a href="https://meteoinfo.ru/">http://meteoinfo.ru</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h4>{t('ocean.antarcticaheader')}</h4>
            <img src='https://meteoinfo.ru/res/230/web/esimo/ocean/ice/ices.png' style={{ width: '40vw' }} />
            <p>{t('ocean.antarcticatext')}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h4>{t('ocean.arcticheader')}</h4>
            <img src='https://meteoinfo.ru/res/230/web/esimo/ocean/ice/icen.png' style={{ width: '40vw' }} />
            <p>{t('ocean.arctictext')}</p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
import React from 'react';
import { CardItem } from '../components/CardItem/CardItem';
import { Spacer } from '../components/Spacer/Spacer';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { useTranslation } from 'react-i18next';
import '../i18next';

export const News = () => {
  const {t} = useTranslation();
  
  const news = [];
  const all = t('news.count');

  for (let i = all; 0 < i; i--) {
    news.push({
      image: t(`news.news${i}.image`),
      title: t(`news.news${i}.title`),
      date: t(`news.news${i}.date`),
      text: t(`news.news${i}.text`),
    });
  }


  return (
    <>
      <Header />
      <Main>
        <Spacer margin={5} />
        {t('news.header')}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        { news.map(someNews => <CardItem
                                  image={someNews.image}
                                  title={someNews.title}
                                  date={someNews.date}
                                  text={someNews.text}
                                  button={t('news.button')} />) }
        </div>
      </Main>
      <Footer />
    </>
  );
}
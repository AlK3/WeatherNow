import React from 'react';
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
        <h4>Осредненная за декаду температура поверхности Мирового океана по данным объективного анализа Гидрометцентра России.</h4>
        <p>Поле обновляется ежедневно около 10.00 по московскому времени и представляет среднюю за 10 суток температуру поверхности океана в градусах Цельсия. <br />Объективный анализ температуры поверхности океана основан на схеме оптимальной интерполяции и использует в качестве входной информации данные оперативных наблюдений, включая спутниковые и контактные измерения.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='https://meteoinfo.ru/images/sea/sstdec.png' style={{ width: '80vw' }} />
          <a href="https://meteoinfo.ru/">http://meteoinfo.ru</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Сплоченность ледового покрова в Антарктике:<br /></h4>
            <img src='https://meteoinfo.ru/res/230/web/esimo/ocean/ice/ices.png' style={{ width: '40vw' }} />
            <p>Сплоченность льда представлена в баллах (0 - чистая вода, 10 - сплошной лед).  Поля обновляются еженедельно по понедельникам.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Сплоченность ледового покрова в Арктике:</h4>
            <img src='https://meteoinfo.ru/res/230/web/esimo/ocean/ice/icen.png' style={{ width: '40vw' }} />
            <p>Сплоченность льда представлена в баллах (0 - чистая вода, 10 - сплошной лед).  Поля обновляются еженедельно по понедельникам.</p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
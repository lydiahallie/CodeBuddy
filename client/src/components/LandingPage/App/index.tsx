import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../Header';
import Content from '../Form';
import Info from '../Info';
import Preview from '../Preview';
import CubicParticleWrapper from '../Particles/cubics';
import Footer from '../Footer';

export default ({ history }: RouteComponentProps) => (
  <div className="app">
    <Header />
    <Content history={history} />
    <Info />
    <Preview />
    <CubicParticleWrapper />
    <Footer />
  </div>
);
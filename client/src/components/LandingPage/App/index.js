import React from 'react';
import { Header } from '../Header';
import { Content } from '../Form';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Info } from '../Info';
import { Preview } from '../Preview';
import { CubicParticleWrapper } from '../Particles/cubics';
import { FooterWrapper as Footer } from '../Footer';

const App = ({history}) => (
  <div className='app'>
    <Header />
    <Content history={ history } />
    <Info />
    <Preview />
    <CubicParticleWrapper />
    <Footer />
  </div>
);

export default connect(null, actions)(App);
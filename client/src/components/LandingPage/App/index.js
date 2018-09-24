import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Content from '../Form';
import Info from '../Info';
import Preview from '../Preview';
import CubicParticleWrapper from '../Particles/cubics';
import Footer from '../Footer';

const App = ({ history }) => (
  <div className="app">
    <Header />
    <Content history={history} />
    <Info />
    <Preview />
    <CubicParticleWrapper />
    <Footer />
  </div>
);

App.propTypes = {
  history: PropTypes.object.isRequired, //eslint-disable-line
};

export default App;

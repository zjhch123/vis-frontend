import React from 'react';
import Header from '../Commons/Header.js';
import Footer from '../Commons/Footer.js';
import Main from './Main.js';
import './Index.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div className="g-index">
        <Header className="g-header"/>
        <Main className="g-main"/>
        <Footer className="g-footer"/>
      </div>
    )
  }
}
import React from 'react';
import Header from '../../components/IndexHeader/Header';
import Footer from '../../components/IndexFooter/Footer';
import style from './Main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div className={style.cMain}>
        <Header />
        <Footer />
      </div>
    )
  }
}
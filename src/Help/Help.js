import React from 'react'
import Header from '../Commons/Header.js'
import Footer from '../Commons/Footer2.js'
import Banner from '../Commons/Banner.js'
import BannerTitle from '../Commons/BannerTitle.js'
// import style from './Help.scss'

export default class Help extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Banner src={require('../image/help_banner.jpg')}>
            <BannerTitle title="帮助" subtitle="工控设备在线搜索与可视化平台"/>
          </Banner>
        </main>
        <Footer />
      </div>
    )
  }
}
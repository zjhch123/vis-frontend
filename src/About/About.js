import React from 'react'
import Header from '../Commons/Header.js'
import Footer from '../Commons/Footer.js'
import Banner from '../Commons/Banner.js'
import BannerTitle from '../Commons/BannerTitle.js'
import style from './About.scss'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Banner src={require('../image/about_banner.jpg')}>
            <BannerTitle title="关于我们" subtitle="工控设备在线搜索与可视化平台"/>
          </Banner>
          
        </main>
        <Footer />
      </div>
    )
  }
}
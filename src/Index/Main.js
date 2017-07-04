import React from 'react';
import './Main.scss';
import Button from '../Commons/Button.js';

export default class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      searchAdvice: ['port:102', 'country:cn', 'module:s7', 'port:502 country:cn']
    }
    this.nowAdvice = 'port:102'
  }

  searchBarAutoScroll() {
    const searchAdvice = this.state.searchAdvice.slice(0)
    let i = 1
    let searchBar = this.refs["searchBar"]
    let id = setInterval(function() {
      this.nowAdvice = searchAdvice[i]
      searchBar.setAttribute("placeholder", this.nowAdvice)
      i = (i + 1) % searchAdvice.length
    }.bind(this), 2000)
    return id
  }

  searchBarStopScroll(id) {
    clearInterval(id)
  }

  search() {
    console.log(1)
  }

  componentDidMount() {
    let searchBar = this.refs["searchBar"]
    let id = this.searchBarAutoScroll()
    searchBar.addEventListener("focus", function() {
      this.searchBarStopScroll(id)
    }.bind(this))
    searchBar.addEventListener("blur", function() {
      id = this.searchBarAutoScroll()
    }.bind(this))
  }

  render() {
    return (
      <main className={this.props.className}>
        <div className="m-main-container">
          <div className="m-logo">
            <embed src={require('../image/logo.svg')}/>
          </div>
          <div className="m-title">
            <h1>工控设备在线搜索与可视化平台</h1>
          </div>
          <div className="m-input">
            <input type="text" ref="searchBar" placeholder={this.state.searchAdvice[0]}/>
          </div>
          <div className="m-btn-group">
            <Button className="button" type="blue" title="鉴势一下" click={() => this.search()}/>
            <Button className="button" type="gray" title="高级搜索"/>
          </div>
          <div className="m-tip">
            <span>提示:按下Shift+/显示提示</span>
          </div>
        </div>
      </main>
    )
  }
}

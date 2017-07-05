import React from 'react';
import style from './Main.scss';
import {Redirect} from 'react-router-dom';
import Button from '../Commons/Button.js';
import $ from 'jquery';

export default class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      searchAdvice: ['port:102', 'country:cn', 'module:s7', 'port:502 country:cn'],
      query: ''
    }
    this.inputScrollId = null
    this.nowAdvice = 'port:102'
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  searchBarAutoScroll() {
    const searchAdvice = this.state.searchAdvice.slice(0)
    let i = 1
    let searchBar = this.refs["searchBar"]
    if(this.inputScrollId) {
      return
    }
    this.inputScrollId = setInterval(function() {
      this.nowAdvice = searchAdvice[i]
      searchBar.setAttribute("placeholder", this.nowAdvice)
      i = (i + 1) % searchAdvice.length
    }.bind(this), 2000)
  }

  searchBarStopScroll() {
    clearInterval(this.inputScrollId)
  }

  search() {
    let searchBar = this.refs["searchBar"]
    let value = searchBar.value || this.nowAdvice
    this.setState({
      query: value
    })
  }

  handleKeyDown(event) {
    if(event.keyCode === 13) {
      this.search()
    }
  }

  componentDidMount() {
    this.searchBarAutoScroll()
  }

  componentWillUnmount() {
    this.searchBarStopScroll()
  }

  render() {
    const query = this.state.query
    if(query) {
      return (
        <Redirect push to={'/result/' + query}/>
      )
    }
    return (
      <main className={style['main'] + ' ' + this.props.className}>
        <div className={style["m-main-container"]}>
          <div className={style["m-logo"]}>
            <embed src={require('../image/logo.svg')}/>
          </div>
          <div className={style["m-title"]}>
            <h1>工控设备在线搜索与可视化平台</h1>
          </div>
          <div className={style["m-input"]}>
            <input type="text" ref="searchBar" placeholder={this.state.searchAdvice[0]} 
                onKeyDown = {(event) => {this.handleKeyDown(event)}}/>
          </div>
          <div className={style["m-btn-group"]}>
            <Button className={style["button"]} type="blue" title="鉴势一下" click={() => this.search()}/>
            <Button className={style["button"]} type="gray" title="高级搜索"/>
          </div>
          <div className={style["m-tip"]}>
            <span>提示:按下Shift+/显示提示</span>
          </div>
        </div>
      </main>
    )
  }
}

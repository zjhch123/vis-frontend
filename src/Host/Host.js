import React from 'react'
import ResultHeader from '../Commons/ResultHeader.js'
import SearchBar from '../Result/SearchBar.js'
import Util from '../Util/Util.js'
import Footer from '../Commons/Footer.js'
import $ from 'jquery'
import { Redirect } from 'react-router-dom'
import MapGL from 'react-map-gl'
import PointOverlay from '../Map/point-overlay.js'
import assign from 'object-assign'
import style from './Host.scss'
import Split from '../Commons/Split.js'
import ItemList from './ItemList.js'
import Port from './Port.js'
import PortDetail from './PortDetail.js'

const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Host extends React.Component {

  constructor() {
    super()
    this._resize = this._resize.bind(this)
    this.state = {
      query: '',
      viewport: {
        width: 500,
        height: 250,
        zoom: 8,
        minZoom: 2.5,
        maxZoom: 15,
        bearing: 0,
        longitude: 110,
        latitude: 30,
      },
      location: {
        longitude: 0,
        latitude: 0
      },
      result: {
        ip: '',
        country: '',
        city: '',
        org: '',
        isp: '',
        asn: '',
        data: []
      }
    }
  }

  request() {
    $.get({
      dataType: 'json',
      url: 'http://139.129.132.196:4399/ics/host',
      data: {
        q: Util.getUrlParam(window.location.search, 'q')
      },
      success: (data) => {
        const _location = {
            longitude: data.result[0].location.longitude,
            latitude: data.result[0].location.latitude
          }
        const result = data.result[0]
        this.setState({
          viewport: assign({}, this.state.viewport, _location),
          location: assign({}, _location),
          result: {
            ip: result.ip_str_row || '',
            country: result.location.country_name || '', 
            city: result.location.city_row || '',
            isp: result.isp || '',
            org: result.org || '',
            asn: result.asn || '',
            tags: result.tags === 'ics' ? 'Industrial Control System' : result.tags || '',
            data: data.result
          }
        })
        this._resize() // 加载好之后调用一遍resize，调整屏幕大小
      }
    })
  }
  handlerViewChange() {
    // TODO
  }
  handlerSearch(val) {
    this.setState({
      query: val
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
    this.request()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }
  _resize() {
    this._onViewportChange({
      width: document.querySelector(".g-container").clientWidth,
      height: 250
    });
  }
  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const query = this.state.query
    if(query) {
      return (
        <Redirect push to={{
          pathname: '/result',
          search: `q=${query}`
        }}/>
      )
    }
    if(!window.location.search) {
      return (
        <Redirect push to={{
          pathname: '/result'
        }}/>
      )
    }
    const data = this.state.result.data.slice(0)
    return (
      <div className={style["g-main"]}>
        <ResultHeader/>
        <SearchBar detail = {false} 
                   title = {Util.getUrlParam(this.props.location.search, 'q') || ''} 
                   onSearch = {(val) => this.handlerSearch(val)} 
                   viewChange={(type) => this.handlerViewChange(type)} />
        <main>
          <MapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange.bind(this)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
          >
            <PointOverlay {...this.state.viewport} locations={[this.state.location]} />
          </MapGL>
          <div className={style["g-container"]}>
            <div className={style["g-left"]}>
              <p>
                <span className={style["u-ip"]}>{this.state.result.ip}</span>
                <span className={style["u-tags"]}>{this.state.result.tags}</span>
              </p>
              <Split />
              <ItemList condition={this.state.result} />
            </div>
            <div className={style["g-right"]}>
              <div className={style["g-box"]}>
                <p><span className={style["u-title"]}>开放端口</span></p>
                <Split />
                <div>
                  {data.map((d) => (<Port title={d.port} key={d.port}/>))}
                </div>
              </div>
              <div className={style["g-box"]}>
                <p><span className={style["u-title"]}>服务</span></p>
                <Split />
                {
                  data.map((d) => (
                    <PortDetail data={d} key={d.port}/>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
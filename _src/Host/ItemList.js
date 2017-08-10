import React from 'react'
import Item from './Item.js'

export default class ItemList extends React.Component {
  render() {
    return (
      <div>
      <Item title="国家" value={this.props.condition.country}/>
      <Item title="城市" value={this.props.condition.city}/>
      <Item title="企业" value={this.props.condition.org}/>
      <Item title="服务供应商" value={this.props.condition.isp}/>
      <Item title="ASN" value={this.props.condition.asn}/>
      </div>
    )
  }
}
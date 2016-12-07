import React, { PureComponent } from 'react'
import LeafNode from './LeafNode'

const value = {}
export default class PureComponentNoAnti extends PureComponent {
  render() {
    return (
      <Item prop1={value} />
    )
  }

}

class Item extends PureComponent {
  render() {
    return (
      <LeafNode />
    )
  }

}

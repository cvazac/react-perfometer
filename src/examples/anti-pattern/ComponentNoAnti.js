import React, { Component } from 'react'
import LeafNode from './LeafNode'

const value = {}
export default class ComponentNoAnti extends Component {
  render() {
    return (
      <Item prop1={value} />
    )
  }

}

class Item extends Component {
  render() {
    return (
      <LeafNode />
    )
  }

}

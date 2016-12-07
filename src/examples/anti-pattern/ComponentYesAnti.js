import React, { Component } from 'react'
import LeafNode from './LeafNode'

export default class ComponentYesAnti extends Component {
  render() {
    return (
      <Item prop1={{}} />
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

import React, { PureComponent } from 'react'
import LeafNode from './LeafNode'

export default class PureComponentYesAnti extends PureComponent {
  render() {
    return (
      <Item prop1={{}} />
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

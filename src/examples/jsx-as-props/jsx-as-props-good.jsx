import React, { PureComponent } from 'react'
import Outer from './Outer'
import Inner from './Inner'

const jsx = <Inner />
export default class JsxAsPropsGood extends PureComponent {
  render() {
    return (
      <Outer component={jsx} />
    )
  }

}

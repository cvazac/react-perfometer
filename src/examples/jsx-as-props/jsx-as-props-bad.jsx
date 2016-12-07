import React, { PureComponent } from 'react'
import Outer from './Outer'
import Inner from './Inner'

export default class JsxAsPropsBad extends PureComponent {
  render() {
    return (
      <Outer component={<Inner />} />
    )
  }

}

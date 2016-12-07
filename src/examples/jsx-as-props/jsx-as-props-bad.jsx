import React, { PureComponent } from 'react'

export default class JsxAsPropsBad extends PureComponent {
  render() {
    return (
      <OuterBad component={<div />} />
    )
  }
}

class OuterBad extends PureComponent {
  render() {
    return (
        <div>{this.props.component}</div>
    )
  }
}

import React, { PureComponent } from 'react'

export default class JsxAsPropsGood extends PureComponent {
  render() {
    return (
      <OuterGood component={this.getJsx}/>
    )
  }

  getJsx = () => {
    return <div />
  }

}

class OuterGood extends PureComponent {
  render() {
    return (
        <div>{this.props.component()}</div>
    )
  }
}

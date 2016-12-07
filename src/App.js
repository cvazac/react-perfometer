import React, { Component } from 'react'

import ComponentYesAnti from './examples/anti-pattern/ComponentYesAnti'
import ComponentNoAnti from './examples/anti-pattern/ComponentNoAnti'
import PureComponentYesAnti from './examples/anti-pattern/PureComponentYesAnti'
import PureComponentNoAnti from './examples/anti-pattern/PureComponentNoAnti'

import bad from './examples/html-elements/DomNodeComponent - bad'
import good from './examples/html-elements/DomNodeComponent - good'

import jsxAsPropsGood from './examples/jsx-as-props/jsx-as-props-good'
import jsxAsPropsBad from './examples/jsx-as-props/jsx-as-props-bad'

/* eslint-disable */
const antiPattern = [ComponentYesAnti, ComponentNoAnti, PureComponentYesAnti, PureComponentNoAnti]
const htmlElements = [good, bad]
const jsxAsProps = [jsxAsPropsGood, jsxAsPropsBad]
/* eslint-enable */

const components = jsxAsProps

const iterations = 50
const instanceIterator = [...Array(1000)]
const delay = 100

let times = []

export default class App extends Component {
  state = {
    done: false,
    componentIndex: undefined,
    iteration: undefined,
  }

  componentDidMount () {
    requestAnimationFrame(() => {
      this.setState({
        componentIndex: 0,
        iteration: 1,
      })
    })
  }

  componentWillUpdate () {
    times.push(performance.now())
  }

  componentDidUpdate () {
    const {componentIndex, iteration, done} = this.state
    if (done) {
      return
    }

    requestAnimationFrame(() => {
      const time = performance.now() - times[times.length - 1]
      times[times.length - 1] = time

      if (iteration === iterations) {
        console.info(components[componentIndex].name, App.parseTimes())
        times = []

        if (componentIndex === components.length - 1) {
          this.setState({
            done: true,
          })
        } else {
          setTimeout(() => {
            this.setState({
              iteration: 1,
              componentIndex: componentIndex + 1,
            })
          }, 1000)
        }
      } else {
        setTimeout(() => {
          this.setState({
            iteration: iteration + 1,
          })
        }, delay)
      }
    })
  }

  render () {
    const {componentIndex, iteration, done} = this.state
    if (done) {
      return null
    }

    return (
      <ComponentsWrapper
        TheComponent={components[componentIndex]}
        iteration={iteration}
      />
    )
  }

}

class ComponentsWrapper extends Component {
  render() {
    const {TheComponent} = this.props
    if (!TheComponent) {
      return null
    }

    return (
      <div>
        {instanceIterator.map((ignore, index) => {
          return <TheComponent key={index} iteration={this.props.iteration} />
        })}
      </div>
    )
  }
}

App.parseTimes = () => {
  let median
  let sum = 0
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE

  times.sort((a, b) => a - b)

  times.forEach((time) => {
    min = Math.min(min, time)
    max = Math.max(max, time)
    sum += time
  })

  let lowMiddle = Math.floor((times.length - 1) / 2)
  let highMiddle = Math.ceil((times.length - 1) / 2)
  median = (times[lowMiddle] + times[highMiddle]) / 2

  return {
    avg: sum / times.length,
    median,
    min,
    max,
  }
}
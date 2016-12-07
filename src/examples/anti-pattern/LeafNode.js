import React from 'react'

const hidden = {display: 'none'}
export default () => {
  return (
    <div style={hidden}>
      <span>label</span>
      <span className='fooBar'>other stuff</span>
    </div>
  )
}

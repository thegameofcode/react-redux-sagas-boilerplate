import React, {Component} from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}

        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('../components/DevTools')
              return <DevTools />
            }
          })()
        }
      </div>
    )
  }
}

// Write your code here
import './index.css'
import Message from './Message/index.js'

import {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <Message />
        </div>
      </div>
    )
  }
}

export default Home

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: true,
    lastCard: true,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render = () => {
    const {firstCard, lastCard} = this.state

    return (
      <div className="bg-container">
        <h1 className="head-top">Show/Hide</h1>
        <div className="inner-container">
          <div className="bottom-box">
            <button className="head" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="box">Joe</p> : ''}
          </div>
          <div className="bottom-box">
            <button className="head" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="box">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

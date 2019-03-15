import React, { Component } from 'react'
import './HabitCard.css'

export default class index extends Component {
  render() {
    return (
      <div className="habitCard">
        <div className="habitCardContainer">
         
          <div className="exit">
            <i className="fa fa-close historyBox"></i>
          </div>

          <h4 className="habitName">Drink More Water</h4>
          
        <div className="weekHistoryContainer">
          <div className="captions weekday">
            <div>S</div>
            <i className="fa fa-check historyBox"></i>
          </div>
            
          <div className="captions weekday">
            <div>M</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>T</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>W</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>Th</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>F</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>Sa</div>
            <i className="fa fa-question historyBox"></i>
          </div>
        </div>

<div className="confirmContainer">
          <div className="captions status">
            <div className="">Completed</div>
            <i className="fa fa-check historyBox"></i>
          </div>
          
          <div className="captions status">
            <div>Not Completed</div>
            <i className="fa fa-close historyBox"></i>
          </div>
          </div>
          
        </div>
      </div>
    )
  }
}

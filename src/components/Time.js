import React, { Component } from 'react';
import moment from 'moment-timezone';
import Kenya from '../assets/kenya.svg';
import Boston from '../assets/boston.png';

class Time extends Component {
  state = {
    time_boston: '',
    time_kenya: ''
  };

  componentDidMount() {
    window.setInterval(() => this.setState({
      time_boston: moment.tz('America/New_York').format('HH:mm:ss'),
      time_kenya: moment.tz('Africa/Nairobi').format('HH:mm:ss')
    }), 1000);

  }

  render() {
    return (
      <div className="row mx-auto container">
        <div className='card kenyan-card border-0'>
          <img src={Kenya} className="card-img-top h-75 img-circle" alt='kenyan flag svg'/>
          <h1 className="time-header">{this.state.time_kenya}</h1>
        </div>
        <div className='card border-0'>
          <img src={Boston} className="card-img-top h-75 img-circle" alt='boston flag png'/>
          <h1 className="time-header">{this.state.time_boston}</h1>
        </div>
      </div>

    );
  }
}


export default Time;
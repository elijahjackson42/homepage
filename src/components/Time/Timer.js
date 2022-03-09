// make live update
// make css for slimmmer nums
import React  from 'react';
import Clock from 'react-live-clock';
import './Timer.css';


//{'HH:mm:ss'}

class timer extends React.Component {
  

  render() {
      return(
        <div className='clock-container'>
          <h1 className='place'>{this.props.name}:</h1>
          <Clock format={'HH:mm'} ticking={true} timezone={this.props.zone} className='clock'/>
        </div>
      );
  }
}

export default timer;
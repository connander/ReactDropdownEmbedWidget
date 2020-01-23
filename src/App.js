import React from 'react';
import styles from './app.css';

class Toggle extends React.Component {
  constructor(props){
  super(props); 
  this.state = {isToggleOn: false};
  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.setState(state => ({
          isToggleOn: !state.isToggleOn
      }));
  }
  
  render() {
      return (
          <div>
          <button className="button1" onClick ={this.handleClick}>{this.state.isToggleOn ? 'Close' : 'Buy Now'}</button>
          <div style={{display: this.state.isToggleOn ? 'block' : 'none' }} className="dropdown-content">
        <embed className="dropdown-embed" allowfullscreen="false" src="connorpstark.com"/>
          </div>
          </div>
      );
  }
  }
  
  
  export default Toggle;
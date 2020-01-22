import React from 'react';
//import styles from './app.css';

class Toggle extends React.Component {
  constructor(props){
  super(props); 
  this.state = {isToggleOn: true};
  
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
          <button className="button1" onClick ={this.handleClick}>{this.state.isToggleOn ? 'Buy Now' : 'Close'}</button>
          <div className="dropdown-content">
        <embed className="dropdown-embed" allowfullscreen="false" src="https://mealfu-standalone.bubbleapps.io/version-test/widget-mock"/>
          </div>
          </div>
      );
  }
  }
  
  
  export default Toggle;
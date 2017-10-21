import React from 'react';
import ReactDOM from 'react-dom';
import './test.css'
import AlertContainer from 'react-alert'
/*
class Appd extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // This binding is necessary to make `this` work in the callback
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
  //	this.msg.show(<AComponent aProp="some message" />)
    console.log('App', this);
    alert('this');
  }

  render() {
    return (
    	<div className="DottedBox">
			    <p className="DottedBox_content">Get started with inline style</p>
			    <button className="btn" onClick={this.handleClick}><span>huehuehue</span></button>
			    <button className="btn red"><span>huehuehue</span></button>
			    <button className="btn orange"><span>huehuehue</span></button>
 	 		</div>
    );
  }
}*/


class Appd extends React.Component {
  alertOptions = {
    offset: 14,
    position: 'bottom right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

 
  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    })
  }
 
  render () {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    )
  }
}

export default Appd;


import React from 'react';
import '../css/test.css'
import AlertContainer from 'react-alert'

class App extends React.Component {
  handleClick = () => {
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
}


class App1 extends React.Component {
  alertOptions = {
    offset: 20,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

 
  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 5000,
      type: 'warn',
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

export default App;


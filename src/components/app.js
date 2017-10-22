import React from 'react';
import '../css/app.css'
import AlertContainer from 'react-alert'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
  render() {
    return (
      <Raisedbtn/>
    );
  }
}

class Raisedbtn extends React.Component{
  render() {
    return [
    <MuiThemeProvider>
      <RaisedButton label="Default" />
    </MuiThemeProvider>
  ];
  }
}

class Topbar extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><img src={ require('../images/notification.png') } width="25px" height="25px"/></li>
        </ul>
      </div>
    );
  }
}

class Buttons extends React.Component {
   
  handleClick = () => {
    console.log('App', this);
    alert('this');
  }

   render() {
      return (
         <div>
            <button className="btn" onClick={this.handleClick}><span>huehuehue</span></button>
            <button className="btn red"><span>huehuehue</span></button>
            <button className="btn orange"><span>huehuehue</span></button>
         </div>
      );
   }
}



class Alert extends React.Component {
  alertOptions = {
    offset: 0,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

 
  showAlert = () => {
    this.msg.show('Notification', {
      time: 5000,
      type: 'warn',
      icon: <img src={ require('../images/notification.png') } width="25px" height="25px"/>
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

class Bogusdata extends React.Component{
  render() {
    return (
      <div>
        <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
          <p>Some text some text some text some text..</p>
      </div>
    );
  }
}

export default App;


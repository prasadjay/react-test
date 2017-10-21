import React from 'react';
import '../css/app2.css'
import AlertContainer from 'react-alert'

class App extends React.Component {
  render() {
    return (
      <div>
        <Topbar2/>
      </div>
    );
  }
}
  

class Topbar2 extends React.Component{
  render() {
    return (
      <div class="menu">
      <ul>
        <li><a href="#">Products</a>
          <ul id="ul">
            <li id="li"><a href="#">BOOK CASES / SHOW CASES</a></li>
            <li id="li"><a href="#">CHAIRS</a></li>
            <li id="li"><a href="#">CABINETS</a></li>
            <li id="li"><a href="#">FILING CABINETS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    );
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


export default App;


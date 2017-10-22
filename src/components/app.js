import React from 'react';
import '../css/app.css'
import AlertContainer from 'react-alert'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import $ from 'jquery';


export const PlusSlides = (n)=>{
    console.log(n);
    return n+1;
}

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList2();
  }

  UserList() {
    $.getJSON('https://randomuser.me/api/')
      .then(({ results }) => this.setState({ person: results }));
  }

  UserList2() {
    $.getJSON('https://randomuser.me/api/', function(res){
      console.log(JSON.stringify(res));
    })
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <UserList/>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    <h1>PlusSlides(1)</h1>
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class RouteMain extends React.Component{
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/roster' component={Roster}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

class NotFound extends React.Component{
  render() {
    return (
     <div>
    <h1>Not Found</h1>
  </div>
    );
  }
}

class Home extends React.Component{
  render() {
    return (
     <div>
    <h1>Home</h1>
  </div>
    );
  }
}
class Roster extends React.Component{
  render() {
    return (
     <div>
    <h1>Roster</h1>
  </div>
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
    this.msg.show('This is very long message to show up in the screen. what will happen. This is very long message to show up in the screen. what will happen. This is very long message to show up in the screen. what will happen.', {
      time: 5000,
      type: 'warn',
      icon: <img src={ require('../images/notification.png') } width="25px" height="25px"/>
    });
  }
 
  render () {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <Link to='/roster'><button onClick={this.showAlert}>Show Alert</button></Link>
      </div>
    );
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


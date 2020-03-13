import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import { Players } from './playerInfo';
// import {Route} from 'react-router-dom';
// import StretchApp from './Web28 Stretch/StretchApp';





class App extends React.Component {


  // the _isMounted is to control the memory leaks. Wasn't sure any other way to get rid of the error but google provided an answer. 

  _isMounted = false;

  state = {
    players: []
  }

  componentDidMount() {
    console.log('cDM is running')
    this._isMounted = true;

    axios
      .get('http://localhost:5000/api/players')
      .then(res => {

        if (this._isMounted) {

          this.setState({
            players: res.data
          })

        }
        

      })
      .catch(err => console.log(err, 'cDM error'))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <div className="App"> 

        <header className="App-header">
          <Navbar />
          {/* <Route path='/stretchapp'><StretchApp/></Route> */}
        </header>


        <div className='PlayerCard' data-testid='player'>
          <Players players={this.state.players}/>
        </div>
        
      </div>
    );
  }
}

export default App;

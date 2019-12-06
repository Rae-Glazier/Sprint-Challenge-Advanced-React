import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';

class App extends React.Component {

  _isMounted = false;

  state = {
    playerData: []
  }

  componentDidMount() {
    console.log('cDM is running')

    this._isMounted = true;

    axios.get('http://localhost:5000/api/players')
      .then(res => {
 
        if (this._isMounted) {
          this.setState( { playerData: res.data } );
        }
      })
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <div className="App"> 

        <header className="App-header">
          <Navbar />
        </header>

        <div data-testid='player' class='player-info'>
          {this.state.playerData.map ( ( player ) => {
            return(
              <div>
                <h2>Name: {player.name} </h2>
                <h2>Country: {player.country} </h2>
              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

export default App;

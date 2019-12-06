import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';

class App extends React.Component {

  state = {
    playerData: []
  }

  componentDidMount() {
    console.log('cDM is running')

    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res);

        this.setState( { playerData: res.data } )
      })
    
  }

  render() {

    return (
      <div className="App"> 

        <header className="App-header">
          <Navbar />
        </header>

        <div>
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

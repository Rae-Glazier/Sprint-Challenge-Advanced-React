import React from 'react';
import axios from 'axios';

class StretchApp extends React.Component {


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
            <h1>graph .. stretch .. trying </h1>
        </div>
      );
    }
  }

export default StretchApp;
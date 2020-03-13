import React from 'react';
import axios from 'axios';

const DataGraphs = () => {
    axios  
        .get('http://localhost:5000/api/players')
        .then(res => {
            console.log('data axios', res.data)
        })
        .catch(err => console.log(err, 'data axios error'))

    return (
        <div> data graph testing </div>
    )
}

// const dataGraphs = [{
//     'country':res.data.country,
//     'world cup wins':''
// }]

export default DataGraphs;
import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/auth';

class Jokes extends React.Component {
    state ={
        joke: []
    }
    render() {
        return (
            <div>
                <h2>Jokes</h2>
                
                    {this.state.joke.map(j => {
                         return (
                            <div>
                               <h2 key={j.id}>{j.joke}</h2> 
                            </div>
                           
                        )})}   
                   
            </div>
        )
    }
    componentDidMount() {
        axios.get('/jokes').then(res => {
            this.setState({ joke: res.data })
        })
    }
        
    
}

export default requiresAuth(Jokes); //hides the users!
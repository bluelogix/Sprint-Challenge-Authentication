import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

import requiresAuth from '../auth/auth';

const Joke = styled.body`
background: #deeaee;
`
const JokeForm = styled.div`
    border: 2px solid black;
    width: 50%;
    margin: 20px auto;
    padding: 30px;
    background: white;

`

class Jokes extends React.Component {
    state ={
        joke: []
    }
    render() {
        return (
            <Joke>
                <h2>Jokes</h2>
                
                    {this.state.joke.map(j => {
                         return (
                            <JokeForm>
                               <h2 key={j.id}>{j.joke}</h2> 
                            </JokeForm>
                           
                        )})}   
                   
            </Joke>
        )
    }
    componentDidMount() {
        axios.get('/jokes').then(res => {
            this.setState({ joke: res.data })
        })
    }
        
    
}

export default requiresAuth(Jokes); //hides the users!
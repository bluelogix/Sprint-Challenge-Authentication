import axios from 'axios'
import React, {Component} from 'react'
import styled from 'styled-components'

const InputForm = styled.div `
    width: 300px;
    height: 200px; 
    padding: 10px; 
    background: #eee; 

    position: absolute; 
    margin: auto; 
    left: 0; 
    right: 0; 
    top: 0; 
    bottom: 0; 
`
const Input = styled.input`
    display: flex;
    margin: auto;
    flex-direction: column;
`


export default class Register extends Component {
    state ={
        username: '',
        password: ''
    }


    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault()
        const endpoint = 'http://localhost:3400/api/register';

        axios.post(endpoint, this.state)
        .then(res => {
            this.props.history.push('/login');
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <InputForm>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit} autoComplete="off">

                    <label htmlFor='username' />
                        <Input
                        name='username' 
                        placeholder="Username"
                        id='username' 
                        value={this.state.username} 
                        type='text' 
                        onChange={this.handleInput} />

                    <label  htmlFor='password'/>
                        <Input
                        name='password' 
                        placeholder="Password"
                        id='password' 
                        value={this.state.password} 
                        type='password'
                        onChange={this.handleInput} />

                        <button type='submit'>Sign Up</button>
                    
                </form>
            </InputForm>
        )
    }

}
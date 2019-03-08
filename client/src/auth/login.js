import axios from 'axios'
import React, {Component} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';



const InputForm = styled.div `
    width: 300px;
    height: 330px; 
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
    margin: 8px auto;
    flex-direction: column;
    padding: 10px ;
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    background: #eee;
    font-size: 20px;
    outline: none;
  
`

const ButtonLog = styled.div`
    background: #eee;
    font-size: 20px;
    border: 2px solid black;
    width: 50%;
    margin: 15px auto;
    border-radius: 70px;
    padding: 10px 0;
    background: #deeaee
  
`

export default class Login extends Component {
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
        const endpoint = 'http://localhost:3400/api/login';

        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/jokes');
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            
           <InputForm>
                <h1>Login</h1>
                
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

                       
                        <ButtonLog type='submit'>Login</ButtonLog> 
                </form>
                        <h4>Don't have an account?</h4>
                        <NavLink  style={{ color: 'purple', textDecoration: 'none' }} to='/register'>Sign up here!</NavLink>
            </InputForm>
        )
    }

}
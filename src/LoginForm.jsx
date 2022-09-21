import React, { Component, useEffect, useState } from "react";
import Input from "./common/input";
import { useNavigate } from 'react-router-dom';
import config from './config.json';

const LoginForm = () => {

    const [data, setData] = useState({username:"", password:""});

    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const setUser = (e) => {
        setData({
            ...data,
            username: e.target.value
        })

    };

    const setPassword = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${config.api}/login`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => setToken(data.user_token));

    };
    // console.log(data.user_token);

    useEffect(()=>{
        if(token){
            localStorage.setItem('token', token);
            navigate('/user-list');
        }
    }, [token]);

    return (
        <div className="container mt-5">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    label="Username"
                    type="text"
                    onChange={(e)=>setUser(e)}
                />
                <Input
                    name="password"
                    label="Password"
                    type="password"
                    onChange={(e)=>setPassword(e)}
                />
                <button className="btn btn-primary mt-2">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;

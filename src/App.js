import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import UserList from './userList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="user-list" element={<UserList />} />
            </Routes>
      </BrowserRouter>
    );
}

export default App;

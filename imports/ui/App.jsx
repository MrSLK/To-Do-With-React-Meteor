import React, { useState, Fragment } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { Todo } from './Todo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const App = () => {

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>
              📝️ Shiba's To-Do List
            </h1>
          </div>
        </div>
      </header>

      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todo />}/>
      <Route path="/signup" element={<RegisterForm />}/>
      <Route path="/signin" element={<LoginForm />}/>
       
    </Routes>
  </BrowserRouter>
      
    </div>
  );
};
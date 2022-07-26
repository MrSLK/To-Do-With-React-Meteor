import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { LoginWithGithub } from './LoginWithGithub';
import { LoginWitFacebook } from './LoginWithFacebook';
import { useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export const LoginForm = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        console.log(err)
        alert(err.message);
    } else {
      navigate('/');
    }
    });

  };

  return (
    <form onSubmit={submit} className="login-form">
      <LoginWitFacebook />
      <LoginWithGithub />
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
      <span>Don't have an account? <a href="/signup">Click</a> here!</span>
    </form>

  );
};
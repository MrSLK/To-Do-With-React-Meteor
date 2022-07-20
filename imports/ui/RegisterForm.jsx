import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const RegisterForm = () => {
  const [firstName, sefirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    console.log("first Name: ", firstName);
    console.log("last Name: ", lastName);
    console.log("Email: ", email);
    console.log("password: ", password);
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="register-form">
        
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          onChange={e => sefirstName(e.target.value)}
        />
      </div><div>
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="firstName"
          required
          onChange={e => setlastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={e => setEmail(e.target.value)}
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
        <button type="submit">Sign In</button>
      </div>

      <span>Have an account? <a href="/signin">Click</a> here!</span>
    </form>
  );
};
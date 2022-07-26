import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export const RegisterForm = () => {
  
  const [firstName, sefirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    console.log("first Name: ", firstName);
    console.log("last Name: ", lastName);
    console.log("Email: ", username);
    console.log("password: ", password);

    let user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password
    }
    
    Accounts.createUser(user, (err) => {
      if (err) {
          alert(err.message);
      } else {
        navigate('/');
      }
  });
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
        <label htmlFor="email">Username*</label>
        <input
          type="text"
          placeholder="username"
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
        <button type="submit">Sign Up</button>
      </div>
      <span>* Don't use email as username</span>
      <span>Have an account? <a href="/signin">Click</a> here!</span>
    </form>
  );
};
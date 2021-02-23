import React, { useState } from 'react';

import { config } from '../../../../utils/oktaConfig';

import './form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userId, setUserId] = useState('');

  const newUser = {
    userId,
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URI}/profile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(user => {
        console.log(user);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <input
            className="formInput"
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <input
            className="formInput"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <input
            className="formInput"
            type="text"
            id="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <input
            className="formInput"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-element">
          <input
            className="formInput"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <input type="submit" id="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;

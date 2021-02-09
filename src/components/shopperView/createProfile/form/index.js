import React, { useState } from 'react';

import './form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const newUser = { email, firstName, lastName, password, confirmPassword };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newUser);
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
            type="confirmPassword"
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

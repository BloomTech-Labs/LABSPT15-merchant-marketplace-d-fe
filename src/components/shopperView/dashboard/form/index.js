import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" id="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;

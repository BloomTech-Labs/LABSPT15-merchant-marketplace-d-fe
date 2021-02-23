import React from 'react';

import Form from './form/Form';

import './createProfile.css';

const CreateProfile = () => {
  return (
    <div className="createProfileWrapper">
      <h2 className="createProfileHeader">Create a Profile</h2>
      <Form />
    </div>
  );
};

export default CreateProfile;

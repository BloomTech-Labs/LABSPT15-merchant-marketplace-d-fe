import React from 'react';
import MainNavBar from '../../common/mainNavBar';
import './landing.css';
import BrowserBar from '../../common/browserBar';

const Landing = () => {
  return (
    <div>
      <MainNavBar />
      <section className="browse">
        <h1 className="title-1">Browse your favorite local store here!</h1>
        <h1>Support your community's business!</h1>
        <div className="browse-bar">
          {' '}
          <BrowserBar />
        </div>
      </section>
      <h1 className="title-2">Top rate merchants</h1>
      <section className="top-rated">
        <div className="top-img">1</div>
        <div className="top-img">2</div>
        <div className="top-img">3</div>
      </section>
    </div>
  );
};

export default Landing;

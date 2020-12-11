import React from 'react';
import MainNavBar from '../../common/mainNavBar';

const Landing = () => {
  return (
    <div>
      <MainNavBar />
      <section className="browse"></section>
      <section className="top-rated">
        <div className="top-img">1</div>
        <div className="top-img">2</div>
        <div className="top-img">3</div>
      </section>
    </div>
  );
};

export default Landing;

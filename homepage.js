import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Accenture</h1>
      <p>A global professional services company that helps organizations achieve their business goals.</p>
      <button>Learn more</button>
    </div>
  );
};

export default Hero;

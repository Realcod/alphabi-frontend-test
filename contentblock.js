import React from 'react';
import styles from './ContentBlock.module.css';

const ContentBlock = ({ title, description }) => {
  return (
    <div className={styles.contentBlock}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContentBlock;

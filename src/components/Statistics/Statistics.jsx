import React from 'react';
import PropTypes from 'prop-types';

import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <span className={styles.text}>Good: {good}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.text}>Neutral: {neutral}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.text}>Bad: {bad}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.text}>Total: {total}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.text}>
          Positive feedback: {positivePercentage}%
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;



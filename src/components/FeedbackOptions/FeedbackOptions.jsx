import React from 'react';
import PropTypes from 'prop-types';

import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
<ul className={styles.wrapper}>
{Object.keys(options).map(element => (
<li key={element} className={styles.list}>
<button className={styles.button} onClick={onLeaveFeedback}>
{element}
</button>
</li>
))}
</ul>
);
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


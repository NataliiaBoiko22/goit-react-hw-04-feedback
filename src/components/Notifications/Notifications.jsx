import React from 'react';
import PropTypes from 'prop-types';

import styles from './notifications.module.css';

const Notification = ({ message }) => {
return <h3 className={styles.message}>{message}</h3>;
};

Notification.propTypes = {
message: PropTypes.string.isRequired,
};

export default Notification; 


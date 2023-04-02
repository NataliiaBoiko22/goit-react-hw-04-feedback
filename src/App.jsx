

import React, { useState } from 'react';
import Notification from './components/Notifications/Notifications';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const handleClickButton = option => {
    if (option.target.textContent === 'good') { setGood(prev => prev + 1)};
    if (option.target.textContent === 'neutral') setNeutral(prev => prev + 1);
    if (option.target.textContent === 'bad') setBad(prev => prev + 1);
};

const countTotalFeedback = () => {
return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
return Math.round((good / countTotalFeedback()) * 100);
};

const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();

return (
<div>
<Section title="Please leave feedback">
<FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={handleClickButton} />
</Section>
<Section title="Statistics">
{total ? ( console.log("hhhh"),
<Statistics
         good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={positivePercentage}
       />
) : (
<Notification message="There is no feedback" />
)}
</Section>
</div>
);
};


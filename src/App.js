import React, { Component } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import StatisticsList from './components/Statistics/StatisticsList';
import Notification from './components/NotificationComponent';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target }) => {
    const { name } = target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = (positive, total) => {
    return Math.round((positive / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total,
    );

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onBtnClick={this.handleClick} />
        <Statistics>
          {total > 0 ? (
            <StatisticsList
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Statistics>
      </Section>
    );
  }
}

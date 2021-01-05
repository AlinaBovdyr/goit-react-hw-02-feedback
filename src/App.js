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

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prevState => {
      const sum = prevState.good + prevState.neutral + prevState.bad;
      return { total: sum };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      const percentage = Math.round((prevState.good / prevState.total) * 100);
      return { positivePercentage: percentage };
    });
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

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

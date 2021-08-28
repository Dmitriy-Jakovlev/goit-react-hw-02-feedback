import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import styles from './App.module.css'
import { FEEDBACK_OPTIONS } from './FeedbackOptions/constans';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleFeedback = e => {
    const name = e.target.name;
    this.setState(state => ({
      ...state,
      [name]: this.state[name] + 1
    }));
  };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    }
    countPositivePercantage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback()
        return total ? Math.round((good/total) * 100) : 0
    }

    render() {
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback()
        const positivePercantage = this.countPositivePercantage()
        return (
            <div>
            <Section title='Please leave feedback'>
                <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={ this.handleFeedback}/>   
            </Section>
            <Section title='Statistics'>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercantage={positivePercantage}
                />
            </Section>
            </div>
        )
    }
}

export default App
import React, { Component } from "react";
import Statistic from "./components/Statistic";
import FeadbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Добавляем +1 к значению отзыва по клику:
  handleFeedback = (event) => {
    const key = event.target.name;
    this.setState((state) => ({
      [key]: state[key] + 1,
    }));
  };

  //Сумируем количество всех отзывов:
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Вычисляем процент положительных отзывов от общего числа и приводим значение к целому числу:
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((this.state.good + this.state.neutral) * 100) / this.countTotalFeedback()
    );
  };

  render() {
    const state = this.state;
    return (
      <>
        <Section title="How was our service?">
          <FeadbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />

          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;

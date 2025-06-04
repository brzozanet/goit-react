import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { useState } from "react";
import css from "./App.module.css";

export const AppFunctional = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const onLeaveFeedback = name => {
    if (name === "good") {
      return setGood(state => state + 1);
    }
    if (name === "neutral") {
      return setNeutral(state => state + 1);
    }
    if (name === "bad") {
      return setBad(state => state + 1);
    }
  };

  return (
    <div className={css.App}>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};

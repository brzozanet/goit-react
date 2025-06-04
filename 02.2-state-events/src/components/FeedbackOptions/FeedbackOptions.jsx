import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.Feedback}>
      <h2>Please leave feedback</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onLeaveFeedback(option)}
          className={css.Feedback__button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

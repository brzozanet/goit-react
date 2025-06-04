import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.Statistics}>
      <h2 className={css.Statistics__title}>Statistics</h2>
      <p className={css.Statistics}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.Statistics}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.Statistics}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={css.Statistics}>
        Total: <strong>{total}</strong>
      </p>
      {isNaN(positivePercentage) ? null : (
        <p className={css.Statistics}>
          Positive feedback: <strong>{positivePercentage}%</strong>
        </p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

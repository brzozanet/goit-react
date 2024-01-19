import PropTypes from "prop-types";
import css from "./Notification.module.css";

export const Notification = ({ message }) => {
  return (
    <div className={css.Notification}>
      <h2>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

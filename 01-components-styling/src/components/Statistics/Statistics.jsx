import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(stats => (
          <li className={css.item} key={stats.id}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

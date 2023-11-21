import PropTypes from "prop-types";

export const Filter = ({ handleFilterChange }) => {
  return (
    <label>
      Find contacts by name:
      <br />
      <input
        type="text"
        name="filter"
        placeholder="Search name"
        id=""
        onChange={handleFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

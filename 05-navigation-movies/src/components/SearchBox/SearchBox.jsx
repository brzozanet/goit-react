import { useState } from "react";
import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

export function SearchBox({ handleSearch }) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={css.search_container}>
        <input
          type="text"
          className={css.search_input}
          placeholder={isActive ? "" : "Search for a movie..."}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={(event) => {
            if (event.code === "Enter") {
              handleSearch(event.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

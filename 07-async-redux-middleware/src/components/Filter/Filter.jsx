import { useDispatch } from "react-redux";
import { filteredContacts } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilter = (event) => {
    event.preventDefault();
    const name = event.target.value;
    dispatch(filteredContacts(name));
  };

  return (
    <>
      <label>
        Find contacts by name:
        <br />
        <input
          type="text"
          name="filter"
          placeholder="Search name"
          id=""
          onChange={handleSetFilter}
        />
      </label>
    </>
  );
};

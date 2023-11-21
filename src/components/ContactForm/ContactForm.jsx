import PropTypes from "prop-types";

export const ContactForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact}>
      <label>
        Name: <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Contact name"
          pattern="[A-Za-z\s']*"
          title="Wprowadź tylko litery, spacje i apostrofy."
          required
        />
      </label>
      <br />
      <br />
      <label>
        Number: <br />
        <input
          type="tel"
          name="number"
          id=""
          placeholder="Contact number"
          pattern="[+]?[\d\s()-]*"
          title="Wprowadź poprawny numer telefonu."
          required
        />
      </label>
      <br />
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

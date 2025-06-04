import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;

    const alreadyExistingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!alreadyExistingContact) {
      dispatch(addContact(name, phone));
    } else {
      alert(`Contact ${name} already existing in Phonebook.`);
    }

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleAddContact}>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            id=""
            placeholder="Contact name"
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
            pattern="[0-9]*"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

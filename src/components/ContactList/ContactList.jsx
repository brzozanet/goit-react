import PropTypes from "prop-types";

export const ContactList = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
};

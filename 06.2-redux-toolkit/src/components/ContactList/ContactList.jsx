import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <>
      <ul>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{" "}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

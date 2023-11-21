import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  addContact = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    event.target.reset();
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <label>
          Find contacts by name:
          <br />
          <input
            type="text"
            name="filter"
            placeholder="Search name"
            id=""
            onChange={this.handleFilterChange}
          />
        </label>
        <br />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import { Component } from "react";
import { nanoid } from "nanoid";
// import css from "./App.module.css";

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
        <form onSubmit={this.addContact}>
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

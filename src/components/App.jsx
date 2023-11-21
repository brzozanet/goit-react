import { Component } from "react";
import { nanoid } from "nanoid";
// import css from "./App.module.css";

export class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addContact = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    event.target.reset();
  };

  render() {
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
              pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

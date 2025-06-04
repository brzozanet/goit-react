import { ContactForm } from "./components/ContactForm";
import { Filter } from "./components/Filter";
import { ContactList } from "./components/ContactList";
import css from "./App.module.css";

export const App = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

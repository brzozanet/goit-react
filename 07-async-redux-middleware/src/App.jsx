import { fetchContacts } from "./redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import { selectError, selectIsLoading } from "./redux/selectors";
import css from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        {isLoading && !error && <h3>Pobieram dane...</h3>}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

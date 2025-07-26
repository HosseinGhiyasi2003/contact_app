import { createContext, useContext, useReducer } from "react";
import { contactReducer } from "./contactReducer";

export const ContactContext = createContext();

function ContactProvider({ children }) {

  const initialState = {
    contacts: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContacts = () => useContext(ContactContext)

export default ContactProvider;

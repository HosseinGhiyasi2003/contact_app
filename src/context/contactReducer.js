export const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    case "FETCH_CONTACTS_SUCCESS": {
      return { ...state, contacts: action.payload, loading: false };
    }
    case "FETCH_CONTACTS_ERROR": {
      return { ...state, contacts: action.payload, loading: false };
    }
    case "ADD_CONTACT": {
      return {...state, contacts: [...state.contacts, action.payload], loading: false};
    }
    case 'DELETE_CONTACT': {
      return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload), loading: false};
    }
    case 'UPDATE_CONTACT': {
      const updateContacts = state.contacts. map(contact => contact.id === action.payload.id ? action.payload : contact)
      return {...state, contacts: updateContacts, loading: false};
    }
    default:
      return state;
  }
};

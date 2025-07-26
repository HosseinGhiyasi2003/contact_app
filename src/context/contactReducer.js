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
    default:
      return state;
  }
};

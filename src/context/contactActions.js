import { getContacts } from "../services/contactService"

export const fetchContacts = async (dispatch) => {
  dispatch({type: 'SET_LOADING'})
  try {
    const res = await getContacts()
    dispatch({type: 'FETCH_CONTACTS_SUCCESS',payload: res.data})
  } catch (error) {
    dispatch({type: 'FETCH_CONTACTS_ERROR',payload: error.message})
    
  }
}
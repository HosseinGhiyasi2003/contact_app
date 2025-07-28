import axios from "axios";

const BASE_URL = "http://localhost:3000/contacts";

export const getContacts = () => axios.get(BASE_URL);
export const apiAddContact = (newContact) => axios.post(BASE_URL, newContact);
export const apiDeleteContact = (id) => axios.delete(`${BASE_URL}/${id}`)
export const apiUpdateContact = (id, updatedContact) => axios.put(`${BASE_URL}/${id}`, updatedContact)
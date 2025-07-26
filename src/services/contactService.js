import axios from "axios"

const BASE_URL = 'http://localhost:3000/contacts'

export const getContacts = () => axios.get(BASE_URL)
import AddContact from "./pages/AddContact";
import ContactDetails from "./pages/ContactDetails";
import ContactEdit from "./pages/ContactEdit";
import Contacts from "./pages/Contacts";

let routes = [
  {path: '/', element: <Contacts/>},
  {path: '/add-contact', element: <AddContact/>},
  {path: '/contact-details/:contactId', element: <ContactDetails/>},
  {path: '/edit-contact/:contactId', element: <ContactEdit/>},
]

export default routes
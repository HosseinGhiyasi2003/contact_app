import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";

let routes = [
  {path: '/', element: <Contacts/>},
  {path: '/add-contact', element: <AddContact/>},
]

export default routes
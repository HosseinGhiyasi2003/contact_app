import { useContext } from "react";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import { useContacts } from "../context/ContactContext";

function Contacts() {

  console.log(useContacts());
  

  return (
    <Wrapper>
        <Sidebar />
        <div className="w-[550px] p-5">
          <SearchBox/>
          <ContactList/>
        </div>
    </Wrapper>
  );
}

export default Contacts;

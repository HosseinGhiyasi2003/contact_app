import {useEffect } from "react";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom"

function Contacts() {

  const location = useLocation();

useEffect(() => {
  if (location.state?.toastMessage) {
    toast.success(location.state.toastMessage);
  }
}, [location.state]);


  return (
    <>
      <ToastContainer/>
      <Wrapper>
        <Sidebar />
        <div className="w-[550px] p-5">
          {/* <SearchBox /> */}
          <ContactList />
        </div>
      </Wrapper>
    </>
  );
}

export default Contacts;

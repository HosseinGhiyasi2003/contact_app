import { useEffect } from "react";
import { useContacts } from "../context/ContactContext";
import ContactItem from "./ContactItem";
import { fetchContacts } from "../context/contactActions";
import { ClipLoader } from "react-spinners";

function ContactList() {
  const { state, dispatch } = useContacts();
  const { contacts, loading } = state;

  useEffect(() => {
    fetchContacts(dispatch);
  }, []);

  return (
    <div className="-mt-20">
      {loading ? (
        <div className="flex justify-center max-w-[300px]">
          <ClipLoader
            className="mt-20"
            color="#605fb8"
            size={35}
            speedMultiplier={1}
          />
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 font-medium">
          No contacts yet...
        </div>
      ) : (
        <div className="max-w-[300px] mt-20 border-2 border-[#edf1f3] rounded-xl overflow-hidden overflow-y-auto max-h-[400px]">
          {contacts.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;

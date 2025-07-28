import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import { useContacts } from "../context/ContactContext";
import userImg from "../assets/user.png";
import { deleteContact } from "../context/contactActions";

function ContactDetails() {
  const { state } = useContacts();
  const { contacts } = state;
  const { contactId } = useParams();

  let navigate = useNavigate();

  const contact = contacts.find((contact) => contact.id === contactId);

  const { dispatch } = useContacts();

  const handleDelete = () => {
    deleteContact(dispatch, contact.id);
    navigate("/", {
      state: { toastMessage: "Contact deleted successfully" },
    });
  };

  return (
    <Wrapper>
      <Sidebar />
      <div className="w-[550px] p-5 flex justify-center mt-10">
        <div className="bg-white p-5 rounded-md shadow-md w-[400px] flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              className="size-40 rounded-full"
              src={contact.img || userImg}
              alt=""
            />
          </div>
          <h3 className="text-center text-[25px] font-bold mt-3">
            {contact.firstName + " " + contact.lastName}
          </h3>
          <div className="flex flex-col items-center mt-2">
            <span className="text-[18px]">{contact.phone}</span>
            <span className="mt-3 text-[18px]">{contact.email}</span>
          </div>
          <div className="flex justify-center mt-3 gap-x-2">
            <Link to={`/edit-contact/${contact.id}`} className="flex justify-center items-center border-2 border-[#ebeef2] w-[100px] h-[40px] cursor-pointer hover:bg-[#e7e4e4]">
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="border-2 border-[#ebeef2] w-[100px] h-[40px] cursor-pointer hover:bg-[#e7e4e4]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactDetails;

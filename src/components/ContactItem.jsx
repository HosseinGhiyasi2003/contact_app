import { Link } from "react-router-dom";
import userImg from "../assets/user.png";

function ContactItem({ firstName, lastName, phone, email, img, id }) {
  return (
    <Link to={`/contact-details/${id}`}>
      <div className="flex p-2.5 gap-x-5 cursor-pointer bg-white overflow-hidden border-b-2 border-b-[#edf1f3] hover:bg-[#dcdbdb] transition-all">
        <img className="size-15 rounded-full" src={img || userImg} alt="" />
        <div>
          <h3 className="text-[16px] font-semibold">
            {firstName + " " + lastName}
          </h3>
          <span className="text-[14px]">{phone}</span>
        </div>
      </div>
    </Link>
  );
}

export default ContactItem;

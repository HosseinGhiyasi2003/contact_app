import { useState } from "react";
import userImg from "../assets/user.png";
import { useContacts } from "../context/ContactContext";
import { addContact } from "../context/contactActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ContactForm() {
  const [errors, setErrors] = useState({});

  const { dispatch } = useContacts();

  let navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const newContact = {
      ...form,
      img: avatar,
    };
    await addContact(dispatch, newContact);

    setForm({ firstName: "", lastName: "", phone: "", email: "" });
    setAvatar(null);
    navigate('/', {
      state: {
        toastMessage: 'Contact added successfully'
      }
    })
  };

  const validateForm = () => {
  const newErrors = {};
  if (!form.firstName) {
    newErrors.firstName = "first name is required";
  }
  if (!form.lastName) {
    newErrors.lastName = "last name is required";
  }
  if (!form.phone) {
    newErrors.phone = "phone is required";
  }
  if (!form.email) {
    newErrors.email = "email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
  ) {
    newErrors.email = "You have entered an invalid email address"; 
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  return (
    <div className="w-[400px] h-[570px] mx-auto mt-2 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Contact</h2>

      <div className="flex justify-center mb-2">
        <img
          src={avatar || userImg}
          alt="avatar"
          className="w-20 h-20 rounded-full"
        />
      </div>

      <div className="flex justify-center mb-2">
        <label className="px-4 py-2 border rounded-md text-sm text-blue-600 hover:bg-blue-50 cursor-pointer">
          Select Image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      <form className="space-y-2" onSubmit={submitHandler}>
        <div>
          <label className="text-sm font-medium flex justify-between">
            First Name <span className="text-red-400">{errors.firstName}</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={handleChange}
            name="firstName"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium flex justify-between">
            Last Name <span className="text-red-400">{errors.lastName}</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={handleChange}
            name="lastName"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium flex justify-between">
            Phone <span className="text-red-400">{errors.phone}</span>
          </label>
          <input
            type="number"
            value={form.phone}
            onChange={handleChange}
            name="phone"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium flex justify-between">
            Email <span className="text-red-400">{errors.email}</span>
          </label>
          <input
            type="text"
            value={form.email}
            onChange={handleChange}
            name="email"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      <div className="flex justify-around mt-4">
        <button
          className="px-4 py-2 border rounded-md cursor-pointer"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
          type="submit"
        >
          Save Contact
        </button>
      </div>
      </form>

    </div>
  );
}

export default ContactForm;

import { useState } from "react";
import userImg from '../assets/user.png'

function ContactForm() {
  const [avatar, setAvatar] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader()
    reader.onload = () => {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(file);
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

      <form className="space-y-2">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input type="text" className="w-full border rounded-md p-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input type="text" className="w-full border rounded-md p-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input type="number" className="w-full border rounded-md p-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="text" className="w-full border rounded-md p-2 mt-1" />
        </div>
      </form>

      <div className="flex justify-around mt-4">
        <button className="px-4 py-2 border rounded-md cursor-pointer">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default ContactForm;

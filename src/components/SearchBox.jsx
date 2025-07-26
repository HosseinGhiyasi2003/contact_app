import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <div className="relative max-w-[300px]">
      <FaSearch className="absolute top-3.5 left-2 z-10 text-[#566272]" />
      <input
        type="text"
        placeholder="Search"
        className="absolute w-full text-[#9ba5b5] p-2 pl-8 bg-[#fffeff] border-2 border-[#edf1f3] rounded-xl outline-0"
      />
    </div>
  );
}

export default SearchBox;

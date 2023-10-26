const SearchInput = ({ placeholder, buttonText }) => {
    return (
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input type="text" id="businessName" className="block w-full p-6 pl-6 text-lg text-[#8A8A8A] rounded-[20px] bg-[#1B1B1B] focus:outline-none border-none focus:border-none focus:ring-0" placeholder={placeholder} required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-4 px-7 rounded-2xl">{buttonText}</button>
      </div>
    );
}
  
export default SearchInput
const SelectDropdown = ({ id, value, placeholder, options, onChange }) => {
    return (
      <select
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full rounded-[20px] p-5 focus:border-[4px]"
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.state}>
            {option.state}
          </option>
        ))}
      </select>
    );
};

export default SelectDropdown;

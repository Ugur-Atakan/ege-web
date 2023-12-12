import Image from 'next/image'
import { components } from 'react-select'

export const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '20px',
      borderColor: '#C8C8C8',
      // Adjust these as necessary
      padding: '4px 8px',
      minWidth: '200px', // Make sure this is enough to accommodate the placeholder text
    }),
    placeholder: (provided) => ({
      ...provided,
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '90%', // Prevents the text from overflowing the width of the select box
    }),
    // ... other styles
};

export const CustomOption = props => (
    <components.Option {...props}>
      <Image
        src={props.data.flagURL}
        width={20}
        height={20}
        style={{ width: '20px', height: '20px', marginRight: '10px', display: 'inline-block'}}
        alt={props.data.iso}
      />
        {props.data.label}
    </components.Option>
);

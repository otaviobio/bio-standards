import { useState } from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="test">
      <input
        type="checkbox"
        className="hidden-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
};

export default CustomCheckbox;

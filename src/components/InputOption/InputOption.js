import React from "react";

function InputOption({ option, selected, setSelected }) {
  return (
    <label htmlFor={`variant-${option}`}>
      <input
        id={`variant-${option}`}
        type="radio"
        name="variant"
        value={option}
        checked={selected === option}
        onChange={(event) => setSelected(event.target.value)}
      />
      {option}
    </label>
  );
}

export default InputOption;

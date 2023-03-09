import { SetStateAction, useState } from "react";
// import styles from "./styles.module.scss";

interface InputPropType {
  setValue: (value: string) => void;
}

export default function Input(props: InputPropType) {
  const { setValue } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setValue(inputValue);
  };

  return (
    <div className={`d-flex flex-column align-center`}>
      <input placeholder="DD/MM/YYYY" onChange={handleChange} />
      <button onClick={handleClick}>See Calendar</button>
    </div>
  );
}

import { useState } from "react";

const Button = () => {
  // USE STATE HOOK
  const [number, setNumber] = useState(0);

  // EVENT
  const handleClick = (): void => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <span className="the-number">{number}</span>
      <button onClick={handleClick}>Click On Me!</button>
    </div>
  );
};

export default Button;

const Button = () => {
  // VARIABLES
  const theNumber: number = 0;

  // EVENTS
  const handleClick = (theNumber: number): void => {
    theNumber++;
    console.log(theNumber);
  };

  return (
    <div>
      <span className="the-number">0</span>
      <button onClick={() => handleClick(theNumber)}>Click On Me!</button>;
    </div>
  );
};

export default Button;

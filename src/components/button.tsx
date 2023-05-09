const Button = () => {
  // VARIABLES
  let theNumber: number = 0;

  // EVENTS
  const handleClick = (): void => {
    theNumber++;
    console.log(theNumber);
  };

  return (
    <div className="container">
      <span className="the-number">{theNumber}</span>
      <button onClick={handleClick}>Click On Me!</button>
    </div>
  );
};

export default Button;

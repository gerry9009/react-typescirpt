type ButtonProps = {
  handleClick: (
    event: React.MouseEvent<Element, MouseEvent>,
    id: number
  ) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};

export default Button;

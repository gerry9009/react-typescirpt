type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<Element>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={(e) => handleChange(e)} />;
};

export default Input;

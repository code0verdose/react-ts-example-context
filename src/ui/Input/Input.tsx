import s from "./Input.module.scss";

type typeAttr = "text" | "password" | "email";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: typeAttr;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

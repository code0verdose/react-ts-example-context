import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

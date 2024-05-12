"use client";

interface Props {
  text: string;
  onClick?: () => void;
  aria: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ text, onClick, aria }: Props) => {
  return (
    <button
      className='bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white'
      onClick={onClick}
      aria-label={aria}>
      {text}
    </button>
  );
};

export default Button;

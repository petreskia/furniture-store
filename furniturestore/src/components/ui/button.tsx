interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function button({ text, className }: ButtonProps) {
  return (
    <button
      className={`border-2 border-solid border-white text-lg text-white bg-transparent px-12 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 active:bg-white active:text-black active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white
disabled:focus:ring-0 disabled:active:bg-transparent disabled:active:text-white cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}

import Image from "next/image";

interface ButtonProps {
    icon: string;
    onClick: any;
    type?: "button" | "submit" | "reset" | undefined;
  }
  
  const ButtonIcon = ({ icon, onClick, type }: ButtonProps) => {
  
    return (
      <button
        className={`rounded-md px-2 py-2 text-white font-bold`}
        onClick={onClick}
        type={type}
      >
         <Image
          src={icon}
          width={15}
          height={15}
          alt='ic-button'
        />
      </button>
    );
  };
  
  export default ButtonIcon;
import Image from "next/image";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button className={`flexCenter gap-2 border rounded-full ${variant}`}>
      {icon && <Image src={icon} alt="icon" height={20} width={20}/>}
      <label className="whitespace-nowrap cursor-pointer font-bold text-base uppercase">{title}</label>
    </button>
  );
};

export default Button;

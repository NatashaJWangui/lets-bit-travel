import Image from "next/image";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button className={`flexCenter gap-2 border rounded-full ${variant}`}>
      {icon && <Image src={icon} alt="icon" height={16} width={16}/>}
      <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
    </button>
  );
};

export default Button;

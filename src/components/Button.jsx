import React from "react";

const Button = ({ type = "main", children , onClick}) => {
    const generalButonStyle = "h-10 box-border  rounded-lg flex  mt-4 w-full md:max-w-64"
    const filledButtons = "text-white font-bold"
    const outlinedButtons = "bg-transparent  hover:text-white hover:border-transparent"

  if (type === "main") {
    return (
      <button onClick={onClick} className={`${generalButonStyle} ${filledButtons} bg-orange-500 hover:bg-orange-600`}>
        {children}
      </button>
    );
  } 
  else if (type === "danger") {
    return (
      <button onClick={onClick} className={`${generalButonStyle} ${filledButtons} bg-red-600 hover:bg-red-700`}>
        {children}
      </button>
    );
  }
  else if (type === "main-outlined") {
    return (
      <button onClick={onClick} className={`${generalButonStyle} ${outlinedButtons} text-orange-500 font-semibold border border-orange-300 hover:bg-orange-500`}>
        {children}
      </button>
    );
  }
  else if (type === "danger-outlined") {
    return (
      <button onClick={onClick} className={`${generalButonStyle} ${outlinedButtons}  text-red-500 font-semibold border border-red-300  hover:bg-red-500 `}>
        {children}
      </button>
    );
  }
};

export default Button;

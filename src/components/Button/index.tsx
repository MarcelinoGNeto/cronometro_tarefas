import React from "react";
import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  texto?: string;
  onClick?: () => void;
}

function Button({ onClick, type, texto }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;

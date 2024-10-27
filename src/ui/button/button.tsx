import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className={cx("ui-button")} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

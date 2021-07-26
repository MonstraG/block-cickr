import { CSSProperties, FC } from "react";
import styles from "./Button.module.scss";

type Props = {
  cb?: () => void;
  style: CSSProperties;
};

const Button: FC<Props> = ({ children, style, cb }) => (
  <button className={styles.button} style={style} onClick={cb}>
    {children}
  </button>
);

export default Button;

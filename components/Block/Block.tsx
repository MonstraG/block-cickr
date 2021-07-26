import { FC, useState } from "react";
import styles from "./Block.module.scss";

const crackDisplay = (crackN: number) => (curr: number) => curr >= crackN ? "block" : "none";

type Props = {
  onBreak: () => void;
};

const Block: FC<Props> = ({ onBreak }) => {
  const [state, setState] = useState<number>(0);
  const breakMore = () => setState((s) => Math.min(s + 1, 5));
  if (state == 5) {
    onBreak();
    setState(6);
  }

  return (
    <div className={styles.container}>
      <div className={state >= 5 ? styles.broken : styles.block} onPointerDown={breakMore}>
        <div className={`${styles.part} ${styles.p1}`} style={{ display: crackDisplay(1)(state) }} />
        <div className={`${styles.part} ${styles.p2}`} style={{ display: crackDisplay(2)(state) }} />
        <div className={`${styles.part} ${styles.p3}`} style={{ display: crackDisplay(3)(state) }} />
        <div className={`${styles.part} ${styles.p4}`} style={{ display: crackDisplay(4)(state) }} />
      </div>
    </div>
  );
};

export default Block;

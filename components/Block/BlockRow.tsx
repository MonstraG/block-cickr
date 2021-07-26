import { FC, useState } from "react";
import styles from "./BlockRow.module.scss";
import Block from "./Block";

type RowState = { broken: number; total: number };
const getInitialState = (total: number) => ({ broken: 0, total });

type Props = {
  blocks: number;
  onBreakBlock: () => void;
};

const BlockRow: FC<Props> = ({ blocks, onBreakBlock }) => {
  const [row, setRow] = useState<RowState>(getInitialState(blocks));

  const onBreak = () => {
    onBreakBlock();
    if (row.total === row.broken + 1) {
      setTimeout(() => setRow(getInitialState(blocks)), 1000); //same as break animation
    } else {
      setRow((prev) => ({ ...prev, broken: prev.broken + 1 }));
    }
  };

  return (
    <div className={styles.blockRow}>
      {Array.from(Array(row.total).keys()).map((i) => (
        <Block onBreak={onBreak} key={i} />
      ))}
    </div>
  );
};

export default BlockRow;

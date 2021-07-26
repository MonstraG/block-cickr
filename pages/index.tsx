import Button from "~/components/Button/Button";
import { NextPage } from "next";
import BlockRow from "~/components/Block/BlockRow";
import Layout from "~/components/Layout/Layout";
import useGameState from "~/components/GameState/useGameState";
import { GameState } from "~/components/GameState/GameStateContext";

const canBuyBlock = ({ money, blocks }: GameState) => money >= blocks;

const IndexPage: NextPage = () => {
  const { state, setState } = useGameState();
  const incMoney = () => setState((s: GameState) => ({ ...s, money: s.money + 1 }));

  const buyBlock = () => {
    if (canBuyBlock(state)) return;
    setState((s) => ({
      money: s.money - s.blocks,
      blocks: s.blocks + 1,
    }));
  };

  return (
    <Layout header="Hello world.">
      State: {JSON.stringify(state)}
      <Button style={{ marginLeft: "2rem" }} cb={buyBlock}>
        ¤
      </Button>
      <BlockRow blocks={state.blocks} onBreakBlock={incMoney} />
    </Layout>
  );
};

export default IndexPage;

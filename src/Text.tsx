// Functional Componentの略
// FCで指定すると children が勝手に渡ってしまうので、それは良くないだろう
// そのため、次のバージョンになるまでは仮のVFCというものを利用して「children」が渡らない、という関数名でコンポーネントの型を指定してあげよう
// ということらしい
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;

  // 同じ名称で指定できる場合には object 設定の書き方をしなくても良い
  // color: color みたいなことは以下のように省略が可能である
  return <p style={{ color, fontSize }}> UNKO DEATH </p>;
};

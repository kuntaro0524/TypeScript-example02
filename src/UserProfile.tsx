import { VFC } from "react";
import { User } from "./types/user";

// 　定義を利用する局面などについては2021/10/07時点ではあまり理解できていない。
// が、引数として User という型をもった user という変数を受け取ると言っているだけ
type Props = {
  user: User;
};

// VFCとしてそれで利用する変数を設定している
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt> 名前 </dt>
      <dd> {user.name} </dd>
      <dt> 趣味 </dt>
      {/* オプショナルチェイニングが入ったもの
      hobbiesはそもそも無くても良いオプショナルな変数だった。
      もし定義されていなかったらその時点で実行を止めるということを実現する機能 = オプショナルチェイニング
      "?"を入れておくだけ */}
      <dd> {user.hobbies?.join(" / ")} </dd>
    </dl>
  );
};

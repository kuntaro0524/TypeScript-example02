import { TodoType } from "./types/todo";

// 関数の型指定には ":"　で区切って()内に入れる
export const Todo = (
  // TodoTypeの中身の変数のうち、一部だけを利用したい場合にはこのように設定が可能
  // Pick or Omit
  // 無視するのが多いか少ないかで決めていけば良い気がする
  // id だけ（一つだけ）を省略したい場合には omit の方が自然だよねってお話
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed } = props;
  const tmpText = completed ? "完了" : "未完";
  return <p> {`${tmpText} ${title}(ユーザ：${userId})`} </p>;
};

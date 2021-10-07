import { TodoType } from "./types/todo";

// 関数の型指定には ":"　で区切って()内に入れる
export const Todo = (
  // TodoTypeの中身の変数のうち、一部だけを利用したい場合にはこのように設定が可能
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed } = props;
  const tmpText = completed ? "完了" : "未完";
  return <p> {`${tmpText} ${title}(ユーザ：${userId})`} </p>;
};

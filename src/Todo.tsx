// ?を追加するとそれは必須ではないということを示す
type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

// 関数の型指定には ":"　で区切って()内に入れる
export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const tmpText = completed ? "完了" : "未完";
  return <p> {`${tmpText} ${title}(ユーザ：${userId})`} </p>;
};

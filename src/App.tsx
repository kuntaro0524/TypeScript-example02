import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  // 共通変数とセット関数を定義する
  // これにToDoリストを保持して使っていく
  // TodoTypeという方のArrayであるという型指定の方法は以下
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="blue" fontSize="24px" />

      <button onClick={onClickFetchData}> データ取得 </button>
      {todos.map((todo) => (
        <Todo
          // マップの中なので key を入れておく必要がある
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

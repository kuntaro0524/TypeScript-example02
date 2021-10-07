import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  // 共通変数とセット関数を定義する
  // これにToDoリストを保持して使っていく
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}> データ取得 </button>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
}

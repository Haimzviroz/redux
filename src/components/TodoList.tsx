import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { markCompleted } from "../store/features/todoSlice";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={styles.ul}>
        {todos.map((t) => (
          <li
            className={t.completed ? styles.completed : styles.uncompleted}
            key={t.id}
            onClick={() => dispatch(markCompleted(t.id))}
          >
            <p>{t.text}</p>
            <p>completed :{t.completed ? "✅ " : "❌"}</p>
          </li>
        ))}
      </ul>
      <h3> Total missions was completed{todos.reduce((a, b) => a + (b.completed ? 1 : 0), 0)}</h3>
    </div>
  );
};

export default TodoList;

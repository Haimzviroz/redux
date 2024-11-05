import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { markCompleted } from "../store/features/todoSlice";
import styles from "./TodoList.module.css";

import React from "react";

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
    </div>
  );
};

export default TodoList;

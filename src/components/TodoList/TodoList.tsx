import todosFromServer from '../../api/todos';
import { TodoInfo } from '../TodoInfo';

export const TodoList = () => {
  return (
    <section className="TodoList">
      {todosFromServer.map(todo => (
        <TodoInfo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
        />
      ))}
    </section>
  );
};

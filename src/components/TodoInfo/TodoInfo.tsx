import React from 'react';
import usersFromServer from '../../api/users';

interface Props {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const TodoInfo: React.FC<Props> = ({ id, title, completed, userId }) => {
  return (
    <article
      data-id={id}
      className={`TodoInfo TodoInfo${completed && '--completed'}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {usersFromServer.find(user => user.id === userId)?.name}
      </a>
    </article>
  );
};

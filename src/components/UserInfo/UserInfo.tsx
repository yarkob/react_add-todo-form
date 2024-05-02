import usersFromServer from '../../api/users';

export const UserInfo = () => {
  return (
    <select data-cy="userSelect">
      {usersFromServer.map((user: { id: number; name: string }) => (
        <option
          key={user.id}
          value={user.id}
          selected={!user.id}
          disabled={!user.id}
        >
          {user.name}
        </option>
      ))}
    </select>
  );
};

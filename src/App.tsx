import './App.scss';
// import { UserInfo } from './components/UserInfo';
// import { TodoList } from './components/TodoList';
// import { FormEventHandler, useState } from 'react';

// export const App = () => {
//   const [title, setTitle] = useState('');
//
//   const titleHandler = (
//     event: Event | undefined,
//   ): FormEventHandler<HTMLSpanElement> | undefined => {
//     if (!event || !event.target) {
//       return;
//     }
//
//     setTitle(event.target.value);
//
//     return;
//   };
//
//   return (
//     <div className="App">
//       <h1>Add todo form</h1>
//
//       <form action="/api/todos" method="POST">
//         <div className="field">
//           <input type="text" data-cy="titleInput" />
//           <span className="error" onChange={titleHandler(event)}>
//             Please enter a title
//           </span>
//         </div>
//
//         <div className="field">
//           <UserInfo />
//
//           <span className="error">Please choose a user</span>
//         </div>
//
//         <button type="submit" data-cy="submitButton">
//           Add
//         </button>
//         <TodoList />
//       </form>
//     </div>
//   );
// };

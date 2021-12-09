import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';
import { useState } from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />

    </div>
  );
}

export default App;

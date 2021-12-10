import React, { useState } from 'react';
import Card from '../UI/Card';
import ButtonModule from '../UI/ButtonModule';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
          }
          if (+enteredAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
          }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        console.log(enteredUsername, enteredAge);
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const errorHandler = () => {
        setError('');
        console.log("ok clicked")
      };
    return (
        <div>
        {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age</label>
                <input type="text" id="age"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <ButtonModule
                    type="submit"
                >Add User</ButtonModule>
            </form>
        </Card>
        </div>

    );

};
export default AddUser;
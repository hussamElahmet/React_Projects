import React, { useState } from 'react';
import Card from '../UI/Card';
import ButtonModule from '../UI/ButtonModule';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (enteredAge < 1) {
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

    return (

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


    );

};
export default AddUser;
import React, { useState } from 'react';
import Card from '../UI/Card';
import ButtonModule from '../UI/ButtonModule';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

 
    const addUserHandler = (event) => {
        event.preventDefault();
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
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age</label>
                <input type="text" id="age"
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
import React, {useContext, useEffect, useReducer, useState} from "react";
import {Redirect} from 'react-router-dom';

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.users;

        case 'DELETE_USER':
            return [
                ...state,
                { id: action.id }
            ];

        case 'EDIT_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    pass: action.pass,
                    description: action.description,
                }
            ];

        default: return state
    }
};

const UsersContext = React.createContext();

const Users = () => {
    const [users, dispatch ] = useReducer(usersReducer, []);
    const [text, setText] = useState('REST API');
    const [count, setCount] = useState(0);

    const getUsers = () => {
        fetch('http://ui-base.herokuapp.com/api/users/get')
            .then((response) => response.json())
            .then(users => {
                console.log(users);
                dispatch({ type: 'GET_USERS', users })
            })
            .catch((error) => {
                console.log('error ', error);
            })
    };

    const addUser = (name) => {
        fetch('http://ui-base.herokuapp.com/api/users/add',{
            method: 'post',
            body: JSON.stringify({
                id: +new Date(),
                name,
                pass: 'Pass',
                description: 'Description'
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(users => {
                dispatch({ type: 'GET_USERS', users: [] })
                getUsers();
            })
            .catch((error) => {
                console.log('error ', error);
            })
    };

    const deleteUser = (id) => {
        fetch('http://ui-base.herokuapp.com/api/users/delete',{
            method: 'post',
            body: JSON.stringify({
                id: id,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(users => {
                dispatch({ type: 'GET_USERS', users: [] })
                getUsers();
            })
            .catch((error) => {
                console.log('error ', error);
            })
    };

    useEffect(() => {
        getUsers();
    }, []);

    let loading = null;

    if (users.length < 1) {
        loading = <h3>Loading...</h3>
    }

    return (
        <UsersContext.Provider value={{ users, dispatch, getUsers, deleteUser, addUser }}>
            <div style={{
                fontSize: 34,
                textAlign: "center"
            }}>
                {text}
                <br/>
                <input value={text} onChange={(e) => setText(e.target.value)}/><hr />
                { count }
                <button style={{ padding: '10px', marginLeft: '10px' }}
                        onClick={() => setCount(count + 1)}>+</button>
                <hr/>

                {loading}

                <UsersList />
            </div>
        </UsersContext.Provider>
    )
};

const UsersList = () => {
    const { users } = useContext(UsersContext);

    return (
        users.map(user => (
            <User user={user} key={user.id}/>
        ))
    )
};

const User = ({ user }) => {
    const { dispatch, getUsers, deleteUser, addUser } = useContext(UsersContext);
    const [isClicked, setIsClicked] = useState(false);

    const goUserEdit = (event) => {
        event.preventDefault();
        setIsClicked(true)
    };

    useEffect(() => {
        console.log('Did mount');

        return () => {
            console.log('Will unmount');
        }
    }, []);

    const goAddUser = () => {
        addUser('cool');
        //deleteUser(user.id);
        //dispatch({ type: 'GET_USERS', users: [] });
        //getUsers();
    };

    if (isClicked) {
        return <Redirect to="/user/edit"/>
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #cccc' }}
             onClick={(e) => goUserEdit(e)}>


            {user.id} - {user.name} - {user.pass}

            <button style={{ padding: '10px', marginLeft: '10px' }}
                    onClick={() => goAddUser()}>x</button>
        </div>
    )
};

export default Users;

/*
const a = {'id':1, 'name': 2, 'key':777};
const {id, ...rest } = a;
*/
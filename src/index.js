import React, {useState, useEffect, useReducer, useContext} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.users;

        case 'DELETE_USER':
            return [
                ...state,
                { id: action.id }
            ];

        default: return state
    }
};

const UsersContext = React.createContext();

const UsersApp = () => {
    const [users, dispatch ] = useReducer(usersReducer, []);
    const [text, setText] = useState('REST API');

    const URL = 'http://ui-base.herokuapp.com/api/users/get';

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then(users => {
                console.log(users);
                dispatch({ type: 'GET_USERS', users })
            })
            .catch((error) => {
                console.log('error ', error);
            })
    }, []);

    let loading = null;

    if (users.length < 1) {
        loading = <h3>Loading...</h3>
    }

    return (
        <UsersContext.Provider value={{ users, dispatch }}>
            <div style={{
                fontSize: 34,
                textAlign: "center"
            }}>
                {text}
                <br/>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
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
    const { dispatch } = useContext(UsersContext);

    useEffect(() => {
        console.log('Did mount');

        return () => {
            console.log('Will unmount');
        }
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid #cccc' }}>

            {user.id} - {user.name} - {user.pass}

            <button style={{ padding: '10px', marginLeft: '10px' }}
                onClick={() => dispatch({ type: 'GET_USERS', users: [] })}>x</button>
        </div>
    )
};

/*const Cool = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('REST API');
    const URL = 'http://ui-base.herokuapp.com/api/users/get';

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then(response => {
                console.log(response);
                setData(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    }, []);

    let loading = null;

    if (data.length < 1) {
        loading = <h3>Loading...</h3>
    }

    return (
        <>
            <div style={{
                fontSize: 34,
                textAlign: "center"
            }}>
                {text}
                <br/>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <hr/>
                {loading}

                {
                    data.map(user => (
                            <User user={user} key={user.id}/>
                        )
                    )}
            </div>
        </>
    )
};*/

ReactDOM.render(<UsersApp />, document.getElementById('root'));
serviceWorker.unregister();

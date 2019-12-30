import React, {useState, useEffect, useReducer} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.users;

        default: return state
    }
};

const Users = () => {
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
                    users.map(user => (
                        <User user={user} key={user.id}/>
                    )
                    )}
            </div>
        </>
    )
};

const User = ({ user }) => {
    useEffect(() => {
        console.log('Did mount');

        return () => {
            console.log('Will unmount');
        }
    }, []);

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #cccc'
        }}>
            {user.id} - {user.name} - {user.pass}
        </div>
    )
};

const Cool = () => {
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
};

ReactDOM.render(<Users />, document.getElementById('root'));
serviceWorker.unregister();

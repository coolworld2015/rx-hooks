import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Test = () =>{
    return (
        <h1>Test</h1>
    )
};

const Cool = () => {
    const [data, setData] = useState([]);
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
        <div style={{
            fontSize: 34,
            textAlign: "center"
        }}>
            REST API
            <hr/>
            {loading}

            {
                data.map(el => (
                    <p key={el.id}>{el.id} - {el.name}</p>
                )
            )}
        </div>
    )
};

ReactDOM.render(<Cool />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

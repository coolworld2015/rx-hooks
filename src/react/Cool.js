import React, {useContext, useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';

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

const User = ({user}) => {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/"/>
    }

    return (
        <div style={{padding: '20px', border: '1px solid #cccc'}}
             onClick={(e) => clickHandler(e)}>

            {user.id} - {user.name} - {user.pass}

        </div>
    )
};

export default Cool;
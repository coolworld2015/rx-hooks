import React, {useState, useEffect, useContext} from 'react';
import {AppConfig} from "./index";
import {Redirect} from 'react-router-dom';

const PhoneEdit = props => {
    const [isBackClicked, setIsBackClicked] = useState(false);

    const goBack = ((event) => {
        event.preventDefault();
        setIsBackClicked(true);
    });

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const {config} = useContext(AppConfig);

    useEffect(() => {
        console.log('values', config);
        setUserId(config.id);
        setUserName(config.name);
        setUserPassword(config.phone);
        setUserDescription(config.description);

        return () => {
            console.log('Will unmount');
        }
    }, []);

    if (isBackClicked || !config.id) {
        return <Redirect to="/table"/>
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{userName}</h1>
                        <p className="text-xs-center">
                        </p>
                        <form onSubmit={goBack}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="ID"
                                        value={userId}
                                        onChange={e => setUserId(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </fieldset>

                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={userPassword}
                                        onChange={e => setUserPassword(e.target.value)}
                                    />
                                </fieldset>

                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={userDescription}
                                        onChange={e => setUserDescription(e.target.value)}
                                    />
                                </fieldset>
                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="button"
                                    onClick={(e) => goBack(e)}
                                >
                                    Back
                                </button>

                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhoneEdit;
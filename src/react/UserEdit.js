import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import {UsersContext} from "./Users";
import {AppContext} from "./index";
import {Redirect} from 'react-router-dom';

const UserEdit = props => {
    const [isBackClicked, setIsBackClicked] = useState(false);

    const goBack = ((event) => {
        event.preventDefault();
        setIsBackClicked(true);
    });

    /*    const isLogin = props.match.path === '/login'
        const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
        const descriptionLink = isLogin ? '/register' : '/login'
        const descriptionText = isLogin ? 'Need an account?' : 'Have an account?'
        const apiUrl = isLogin ? '/users/login' : '/users'
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
        const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)
        const [, setToken] = useLocalStorage('token')
        const [, dispatch] = useContext(CurrentUserContext)*/

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const {userItem} = useContext(AppContext);

    useEffect(() => {
        console.log('values', userItem);
        setUserId(userItem.id);
        setUserName(userItem.name);
        setUserPassword(userItem.pass);
        setUserDescription(userItem.description);

        return () => {
            console.log('Will unmount');
        }
    }, []);

    if (isBackClicked || !userItem.id) {
        return <Redirect to="/users"/>
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{userName}</h1>
                        <p className="text-xs-center">
                            {/*                            <Link to={descriptionLink}>{descriptionText}</Link>*/}
                        </p>
                        {/*                        {error && <BackendErrorMessages backendErrors={error.errors} />}*/}
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
}

export default UserEdit;
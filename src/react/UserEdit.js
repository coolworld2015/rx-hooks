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

    const [username, setUsername] = useState('');

    const {userItem} = useContext(AppContext);

    useEffect(() => {
        console.log('values', userItem);
        setUsername(userItem.id);

        return () => {
            console.log('Will unmount');
        }
    }, []);


    const pageTitle = 'pageTitle';
    const email = 'email';
    const password = 'password';
    const isLoading = false;

    const handleSubmit = event => {
        event.preventDefault();

        /*const user = isLogin ? {email, password} : {email, password, username}

        doFetch({
            method: 'post',
            data: {
                user
            }
        })*/
        console.log('values', email, password)
    }

    /*    useEffect(() => {
            if (!response) {
                return
            }
            console.log('response', response)
            setToken(response.user.token)
            setIsSuccessfullSubmit(true)
            dispatch({type: 'SET_AUTHORIZED', payload: response.user})
        }, [response, setToken, dispatch])*/

    /*    if (isSuccessfullSubmit) {
            return <Redirect to="/" />
        }*/

    if (isBackClicked) {
        return <Redirect to="/users"/>
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            {/*                            <Link to={descriptionLink}>{descriptionText}</Link>*/}
                        </p>
                        {/*                        {error && <BackendErrorMessages backendErrors={error.errors} />}*/}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        /*onChange={e => setUsername(e.target.value)}*/
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        /* onChange={e => setEmail(e.target.value)}*/
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                        /*onChange={e => setPassword(e.target.value)}*/
                                    />
                                </fieldset>
                                <button
                                    disabled={isLoading}
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="button"
                                    onClick={(e) => goBack(e)}
                                >
                                    Back
                                </button>

                                <button
                                    disabled={isLoading}
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
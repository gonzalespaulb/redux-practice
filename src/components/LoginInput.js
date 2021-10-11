import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
// import { logIn } from '../actions-old/isLoggedActions';
import { logIn } from '../redux/loginReducer';
import {LoginHolder, Login, UsernameContainer, PasswordContainer, UsernameField, PasswordField, InputLabel, LoginBtn} from '../styling/loginInput';
import { useDispatch } from 'react-redux';

// const mapStateToProps = (state) => {
//     return state.loggedInStatus;
// }

const LoginInput = (props) => {

    const dispatch = useDispatch();

    const [usernameInput, setUsernameInput] = useState(``);
    const [passwordInput, setPasswordInput] = useState(``);
    const [finalLogin, setFinalLogin] = useState({username: ``, password: ``});

    const approvedUsername = `lordtony@reactoads.com`;
    const approvedPassword = `tonytonytony`;

    const checkUsername = () => {
        if (finalLogin.username === approvedUsername && finalLogin.password === approvedPassword) {
            // props.logIn(true);
            dispatch(logIn());
        }
    }

    const setLoginState = () => {
        setFinalLogin({username: usernameInput, password: passwordInput});
    }

    useEffect(() => {
        setLoginState();
    }, [usernameInput, passwordInput])

    return (
        <LoginHolder>
            <Login>
                <UsernameContainer>
                    <InputLabel>Username</InputLabel>
                    <UsernameField
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                    ></UsernameField>
                </UsernameContainer>
                <PasswordContainer>
                    <InputLabel>Password</InputLabel>
                    <PasswordField
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    ></PasswordField>
                </PasswordContainer>
                <LoginBtn onClick={checkUsername}>Log In</LoginBtn>
            </Login>
        </LoginHolder>
    )
}

// export default connect(mapStateToProps, { logIn })(LoginInput);
export default LoginInput;
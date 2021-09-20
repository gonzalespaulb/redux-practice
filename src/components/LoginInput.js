import { connect } from 'react-redux';
import { logIn } from '../actions-old/isLoggedActions';
import {LoginHolder, Login, UsernameContainer, PasswordContainer, UsernameField, PasswordField, InputLabel, LoginBtn} from '../styling/loginInput';

const mapStateToProps = (state) => {
    return state.loggedInStatus;
}

const LoginInput = (props) => {

    return (
        <LoginHolder>
            <Login>
                <UsernameContainer>
                    <InputLabel>Username</InputLabel>
                    <UsernameField></UsernameField>
                </UsernameContainer>
                <PasswordContainer>
                    <InputLabel>Password</InputLabel>
                    <PasswordField></PasswordField>
                </PasswordContainer>
                <LoginBtn onClick={() => props.logIn(true)}>Log In</LoginBtn>
            </Login>
        </LoginHolder>
    )
}

export default connect(mapStateToProps, { logIn })(LoginInput);
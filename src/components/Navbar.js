import { connect } from 'react-redux';
import { logOut } from '../actions-old/isLoggedActions';
import { NavigationContainer, CreatePostBtn, LogOutBtn } from "../styling/navbar";

const mapStateToProps = (state) => {
    return state.loggedInStatus;
}

const Navbar = (props) => {
    return (
        <NavigationContainer>
            <LogOutBtn onClick={() => props.logOut(false)}>Log Out</LogOutBtn>
            <CreatePostBtn onClick={props.formOn}>New Post</CreatePostBtn>
        </NavigationContainer>
    )
}

export default connect(mapStateToProps, { logOut })(Navbar);
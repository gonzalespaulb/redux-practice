// import { connect } from 'react-redux';
// import { logOut } from '../actions-old/isLoggedActions';
import { NavigationContainer, CreatePostBtn, LogOutBtn } from "../styling/navbar";
import { useDispatch } from 'react-redux';
import { logOut } from "../redux/loginReducer";

// const mapStateToProps = (state) => {
//     return state.loggedInStatus;
// }

const Navbar = (props) => {

    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {/* <LogOutBtn onClick={() => props.logOut(false)}>Log Out</LogOutBtn> */}
            <LogOutBtn onClick={() => dispatch(logOut())}>Log Out</LogOutBtn>
            <CreatePostBtn onClick={props.formOn}>New Post</CreatePostBtn>
        </NavigationContainer>
    )
}

// export default connect(mapStateToProps, { logOut })(Navbar);
export default Navbar;
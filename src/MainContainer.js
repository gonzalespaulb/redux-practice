import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostForm from "./components/Postform";
import LoginInput from "./components/LoginInput";
// import { connect } from 'react-redux';
// import { logIn } from './actions-old/isLoggedActions';
import { ParentContainer } from "./styling/mainContainer";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./redux/postReducer";


// const mapStateToProps = (state) => {
//     return state.loggedInStatus;
// }

const MainContainer = (props) => {

    const loginStatus = useSelector(state => state.login.isLoggedIn);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [])

// ......................................................................FORM COMPONENT

    const [formTrigger, setFormTrigger] = useState(false);
    const formOn = () => setFormTrigger(true);
    const formOff = () => setFormTrigger(false);

    const showForm = () => {
        if(formTrigger) {
            return <PostForm formOff={formOff}></PostForm>
        } else return;
    };

// ......................................................................FORM COMPONENT

    const showContent = () => {
        return (
            <>
                <Navbar formOn={formOn}></Navbar>
                <Post></Post>
                {showForm()}
            </>
        )
    };

    const showLoginForm = () => <LoginInput></LoginInput>;

    return (
        <ParentContainer>
            {/* {props.loggedInStatus ? null : showLoginForm()} */}
            {loginStatus ? null : showLoginForm()}
            {/* {props.loggedInStatus ? showContent() : null} */}
            {loginStatus ? showContent() : null}
        </ParentContainer>
    )
}

// export default connect(mapStateToProps, { logIn })(MainContainer);
export default MainContainer;

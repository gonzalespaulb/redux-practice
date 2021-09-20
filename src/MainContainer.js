import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostForm from "./components/Postform";
import LoginInput from "./components/LoginInput";
import { connect } from 'react-redux';
import { logIn } from './actions-old/isLoggedActions';
import { ParentContainer } from "./styling/mainContainer";


const mapStateToProps = (state) => {
    return state.loggedInStatus;
}

const MainContainer = (props) => {

    const [formTrigger, setFormTrigger] = useState(false);

    const formOn = () => setFormTrigger(true);
    const formOff = () => setFormTrigger(false);

    const showForm = () => {
        if(formTrigger) {
            return <PostForm formOff={formOff}></PostForm>
        } else return;
    };

    const showContent = () => {
        return (
            <>
                <Navbar 
                    formOn={formOn}>
                </Navbar>

                <Post></Post>

                {showForm()}
            </>
        )
    };

    const showLoginForm = () => <LoginInput></LoginInput>;

    return (
        <ParentContainer>
            {props.loggedInStatus ? null : showLoginForm()}
            {props.loggedInStatus ? showContent() : null}
        </ParentContainer>
    )
}

// export default MainContainer;
export default connect(mapStateToProps, { logIn })(MainContainer);

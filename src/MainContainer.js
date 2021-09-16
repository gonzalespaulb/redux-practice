import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostForm from "./components/Postform";

const ParentContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 75px;
`

const MainContainer = () => {

    const [formTrigger, setFormTrigger] = useState(true);

    const formOn = () => setFormTrigger(true);
    const formOff = () => setFormTrigger(false);

    const showForm = () => {
        if(formTrigger) {
            return <PostForm formOff={formOff}></PostForm>
        } else return;
    }

    return (
        <ParentContainer>
            <Navbar formOn={formOn}></Navbar>
            <Post></Post>
            {showForm()}
        </ParentContainer>
    )
}

export default MainContainer;

import React, { useState } from "react";
import styled from "styled-components";

const SubmissionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba (102, 102, 102, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    top: 0;
`;

const SubmissionForm = styled.div`
    background-color: #fff;
    height: 400px;
    width: 600px;
`

const PostForm = ({ formOff }) => {

    const [preSubmit, setPreSubmit] = useState(``);
    const [submitThis, setSubmitThis] = useState(``);

    return (
        <SubmissionContainer onClick={formOff}>
            <SubmissionForm></SubmissionForm>
        </SubmissionContainer>
    )
}

export default PostForm;
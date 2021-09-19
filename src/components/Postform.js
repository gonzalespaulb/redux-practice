import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { createNewPost } from '../actions-old/postActions';

const SubmissionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba (0, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    top: 0;
`;

const SubmissionForm = styled.div`
    background-color: #fff;
    height: 300px;
    width: 600px;
    z-index: 150;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
`;

const InputContainer1 = styled.div`
    width: 90%;
    margin-top: 40px;
    margin-left: 20px;
`;

const InputContainer2 = styled.div`
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;
`

const FormLabel = styled.h3`
    margin: 0;
`;

const FormInput = styled.input`
    margin-top: 20px;
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 1px solid #333;
`;

const SubmitBtn = styled.button`
    margin-top: 30px;
    margin-left: 20px;
    border: none;
    padding: 8px 16px 8px 16px;
    border-radius: 15px;
    cursor: pointer;
`;

const mapStateToProps = (state) => {
    return state.posts;
  }

const PostForm = (props) => {

    const [blurbTitle, setBlurbTitle] = useState(``);
    const [blurbContent, setBlurbContent] = useState(``);
    const [submitThis, setSubmitThis] = useState(``);

    const finalSubmission = () => {
        setSubmitThis({title: blurbTitle, body: blurbContent})
    }

    console.log(props);

    useEffect(() => {
        finalSubmission();
    }, [blurbTitle, blurbContent])

    return (
        <SubmissionContainer onClick={props.formOff}>
            <SubmissionForm onClick={(e) => e.stopPropagation()}>

                <InputContainer1>
                    <FormLabel>Blurb Title</FormLabel>

                    <FormInput
                        onChange={(e) => setBlurbTitle(e.target.value)}
                    >
                    </FormInput>
                </InputContainer1>

                <InputContainer2>
                    <FormLabel>Blurb Content</FormLabel>
                    <FormInput
                        onChange={(e) => setBlurbContent(e.target.value)}
                    >
                    </FormInput>
                </InputContainer2>
                
                <SubmitBtn
                    onClick={() => {
                        props.createNewPost(submitThis);
                    }}
                >
                    Post Blurb
                </SubmitBtn>
                
            </SubmissionForm>
        </SubmissionContainer>
    )
}

export default connect(mapStateToProps, { createNewPost })(PostForm);
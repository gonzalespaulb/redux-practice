import React, { useState } from "react";
import { connect } from "react-redux";
import { createNewPost } from "../actions-old/postActions";
import {
  SubmissionContainer,
  SubmissionForm,
  InputContainer1,
  InputContainer2,
  FormLabel,
  FormInput,
  SubmitBtn,
} from "../styling/postForm";

const mapStateToProps = (state) => {
  return state.posts;
};

const PostForm = (props) => {
  const [blurbTitle, setBlurbTitle] = useState(``);
  const [blurbContent, setBlurbContent] = useState(``);

  const finalSubmission = () => {
        props.createNewPost({ title: blurbTitle, body: blurbContent });
        clearInputField();
  };

  const clearInputField = () => {
    setBlurbTitle(``);
    setBlurbContent(``);
  };

  return (
    <SubmissionContainer onClick={props.formOff}>
      <SubmissionForm onClick={(e) => e.stopPropagation()}>
        <InputContainer1>
          <FormLabel>Blurb Title</FormLabel>

          <FormInput
            value={blurbTitle}
            onChange={(e) => setBlurbTitle(e.target.value)}
          ></FormInput>
        </InputContainer1>

        <InputContainer2>
          <FormLabel>Blurb Content</FormLabel>
          <FormInput
            value={blurbContent}
            onChange={(e) => setBlurbContent(e.target.value)}
          ></FormInput>
        </InputContainer2>

        <SubmitBtn onClick={finalSubmission}>Post Blurb</SubmitBtn>
      </SubmissionForm>
    </SubmissionContainer>
  );
};

export default connect(mapStateToProps, { createNewPost })(PostForm);

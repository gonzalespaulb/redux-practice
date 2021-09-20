import styled from "styled-components";

export const SubmissionContainer = styled.div`
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

export const SubmissionForm = styled.div`
    background-color: #fff;
    height: 300px;
    width: 600px;
    z-index: 150;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
`;

export const InputContainer1 = styled.div`
    width: 90%;
    margin-top: 40px;
    margin-left: 20px;
`;

export const InputContainer2 = styled.div`
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;
`

export const FormLabel = styled.h3`
    margin: 0;
`;

export const FormInput = styled.input`
    margin-top: 20px;
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 1px solid #333;
`;

export const SubmitBtn = styled.button`
    margin-top: 30px;
    margin-left: 20px;
    border: none;
    padding: 8px 16px 8px 16px;
    border-radius: 15px;
    cursor: pointer;
`;

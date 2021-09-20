import styled from "styled-components"

export const LoginHolder = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
`;

export const Login = styled.div`
    width: 600px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 15px;
    box-shadow: 0 6px 6px rgba(0,0,0,0.2)
`;

export const UsernameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 15px;
`;

export const PasswordContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
`;

export const InputLabel = styled.label`
    margin-bottom: 10px;
    margin-left: 4px;
    font-size: 24px;
`;

export const UsernameField = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-color: #f0f0f0;
    height: 50px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    padding-left: 10px;
`;

export const PasswordField = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-color: #f0f0f0;
    height: 50px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    padding-left: 10px;
`;

export const LoginBtn = styled.button`
    padding: 16px 24px 16px 24px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.5s;

    :hover {
        background-color: #333;
        color: #f0f0f0;
    }
`;
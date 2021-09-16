import styled from "styled-components";

const NavigationContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #666;
    position: fixed;
    top: 0;    
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const CreatePostBtn = styled.button`
    padding: 8px 16px 8px 16px;
    background-color: #f0f0f0;
    color: #333;
    border: none;
    margin-right: 20px;
    border-radius: 15px;
    cursor: pointer;
`

const Navbar = ({ formOn }) => {
    return (
        <NavigationContainer>
            <CreatePostBtn onClick={formOn}>New Post</CreatePostBtn>
        </NavigationContainer>
    )
}

export default Navbar;
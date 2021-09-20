import { NavigationContainer, CreatePostBtn } from "../styling/navbar";

const Navbar = ({ formOn }) => {
    return (
        <NavigationContainer>
            <CreatePostBtn onClick={formOn}>New Post</CreatePostBtn>
        </NavigationContainer>
    )
}

export default Navbar;
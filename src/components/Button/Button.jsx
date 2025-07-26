import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${props => props.blue ? "blue" : "red"};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Button = ({ children, blue}) => {
    return <StyledButton blue={blue}>{children}</StyledButton>

}

export default Button;
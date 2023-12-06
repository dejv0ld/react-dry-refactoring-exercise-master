import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: yellow;
    color: black;
    padding: 10px;
    border: 0;
    border-radius: 5px; 
    font-size: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const YellowButton = ({ children }: { children: React.ReactNode }) => (
    <StyledButton>{children}</StyledButton>
)

export default YellowButton;
import styled from '@emotion/styled';

export const ContainerUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ButtonLogIn = styled.button`
    margin-top: 10px;
    background-color: #fed36a;
    border: none;
    padding: 5px 0;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
    &:hover,
    &:focus,
    &:focus-visible {
        background-color: white;
        -webkit-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
        -moz-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
        box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
`;

export const UserText = styled.p`
`;
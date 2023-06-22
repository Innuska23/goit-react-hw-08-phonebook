import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
    display: flex;
    flex-flow: column wrap;
    gap: 25px;
    font-size: 22px;
    ${'' /* max-width: 450px */}
`;

export const LabelForm = styled.label`
    font-weight: 500;`;

export const InputForm = styled(Field)`
        box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    width: 100%;
    height: 32px;
    background: #455A64;
    border: none;
    color: #fff;
    outline-with: 1.75;
    outline-color: #455A64;

    outline-style: solid;
    border-radius: 4px;
    &:hover,
    &:focus,
    &:focus-visible {
        outline-color: #FED36A;
        border: none;
    }
`;

export const ButtonForm = styled.button`
    padding: 5px 20px;
    color: black;
    width: 200px;
    height: 48px;
    border-radius: 12px;
    background-color: #fed36a;
    cursor: pointer;
    font-size: 24px;
    outline: none;
    border: 1px solid;
    &:hover {
    background-color: white;
    border: none;
    -webkit-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
    -moz-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
    box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);
    }
`;

export const Error = styled(ErrorMessage)`
    color: red;
    font-size: 20px;
    text-align: center;
`;
import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
    display: flex;
    flex-flow: column wrap;
    gap: 25px;
    font-size: 22px;
    max-width: 450px`;

export const LabelForm = styled.label`
    color: #333340;
    background: #ffffff;
    font-weight: 500;`;

export const InputForm = styled(Field)`
    display: inline-block;
    font-size: 22px;
    background: #EDF2F7;
    border-color: green;
    outline: none;
    border-radius: 6px;
    height: 38px;
    &:hover {
        box-shadow: 0px 0px 30px 0px rgba(21,115,71,1)
    `;

export const ButtonForm = styled.button`
    padding: 5px 20px;
    color: white;
    height: 48px;
    border-radius: 12px;
    background-color: #198754;
    cursor: pointer;
    font-size: 24px;
    outline: none;
    border: 1px solid;
    &:hover {
    background-color: #157347;
    border: none;
    box-shadow: 0px 0px 30px 0px rgba(21,115,71,1);
    }
`;

export const Error = styled(ErrorMessage)`
    color: red;
    font-size: 20px;
    text-align: center;
`;
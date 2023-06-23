import styled from '@emotion/styled'

export const PagesStyle = styled.div`
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 22px;
    width: 100%;
`;

export const Labelh1 = styled.h1`
    margin-bottom: 20px;
    text-transform: uppercase
`;

export const Labelh2 = styled.h2`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonAuth = styled.button`
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

export const InputAuth = styled.input`
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

export const LabelAuth = styled.label`
    font-weight: 500;
`;

export const TitleAuth = styled.h1`
    text-transform: uppercase;
    margin-bottom: 20px;
`;
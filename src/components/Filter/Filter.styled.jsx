import styled from '@emotion/styled';

export const FilterContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 25px;
    font-size: 22px;
    max-width: 450px;
`;

export const LabelFilter = styled.label`
    font-weight: 500;
`;

export const InputFilter = styled.input`
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
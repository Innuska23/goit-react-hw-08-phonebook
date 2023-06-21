import styled from '@emotion/styled';

export const FilterContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 25px;
    font-size: 22px;
    max-width: 450px;
`;

export const LabelFilter = styled.label`
    color: #333340;
    background: #ffffff;
    font-weight: 500;
`;

export const InputFilter = styled.input`
  display: inline-block;
    font-size: 22px;
    background: #EDF2F7;
    border-color: green;
    outline: none;
    border-radius: 6px;
    height: 38px;
    &:hover {
      box-shadow: 0px 0px 30px 0px rgba(21,115,71,1);
    }
`;
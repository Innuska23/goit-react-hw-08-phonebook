import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0;
    list-style: none;
    font-size: 22px;
    width: 550px;
    align-items: stretch;
`;

export const ListItem = styled.li`
    display: flex;
    gap: 40px;
    align-items: center;
    font-size: 22px;
    justify-content: space-between;
`;

export const Button = styled.button`
    border-radius: 12px;
    width: 150px;
    text-transform: capitalize;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    color: #333340;
    border: 1px solid;
    width: 155px;
    color: white;
    height: 48px;
    background-color: #bb2d3b;
    cursor: pointer;
    font-size: 22px;
    outline: none;
    &:hover {
    background-color: #dc3545;
    border: none;
    box-shadow: 10px 10px 25px 0px rgba(187,45,59,1);
    }
`;
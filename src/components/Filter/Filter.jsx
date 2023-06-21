import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

import { FilterContainer, InputFilter, LabelFilter } from './Filter.styled';

function Filter() {
    const dispatch = useDispatch();
    const handlerChangeFilter = e => {
        dispatch(setFilter(e.target.value.toLowerCase().trim()));
    };
    return (
        <FilterContainer>
            <LabelFilter htmlFor="filter">Find contacts by name:</LabelFilter>
            <InputFilter
                id="filter"
                type="text"
                name="filter"
                onChange={handlerChangeFilter}
            />
        </FilterContainer>
    );
}

export default Filter;
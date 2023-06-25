import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import debounce from 'lodash/debounce'

function Filter() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handlerChangeFilter = e => {
        setValue(e.target.value);
        debouncedFilterChange(e.target.value)
    };

    const debouncedFilterChange = useMemo(() => debounce((value) => {
        dispatch(setFilter(value.toLowerCase().trim()));
    }, 300), [dispatch])


    return (
        <FormControl>
            <FormLabel htmlFor='filter'>Find contacts by name:</FormLabel>

            <InputGroup>
                <Input
                    id="filter"
                    type="text"
                    name="filter"
                    onChange={handlerChangeFilter}
                    value={value}
                />
            </InputGroup>
        </FormControl>

    );
}

export default Filter;

import React from 'react';
import {Select, Input} from '@chakra-ui/react';
// @ts-ignore
import {ValueType} from 'react-select';

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'},
    {value: 'option4', label: 'Option 4'},
];

function TestDrop() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedOption, setSelectedOption] = React.useState<ValueType<Option>>();
    const [filteredOptions, setFilteredOptions] = React.useState<Option[]>(options);

    React.useEffect(() => {
        setFilteredOptions(
            options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    return (
        <div>
            <Input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            {/*@ts-ignore*/}
            <Select options={filteredOptions}
                value={selectedOption}
                onChange={(option) => {
                    setSelectedOption(option);
                }}/>
        </div>
    );
}

export default TestDrop;

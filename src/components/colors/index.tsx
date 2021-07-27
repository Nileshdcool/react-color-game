import Multiselect from 'multiselect-react-dropdown';
import React from 'react';

const colorOptions = [
    { id: "red", name: "Red" },
    { id: "blue", name: "Blue" },
    { id: "yellow", name: "Yellow" },
    { id: "orange", name: "Orange" },
    { id: "purple", name: "Purple" },
    { id: "green", name: "Green" },
    { id: "black", name: "Black" }
];

export const initialSelection = [
    colorOptions[0],
    colorOptions[1],
    colorOptions[2]
];

export const SelectColors: React.FC<any> = (props) => {

    const onSelect = (e: any) => {
        props.onChange(e);
    }

    const onRemove = (e: any) => {
        props.onChange(e);
    }

    return (
        <Multiselect
            options={colorOptions} // Options to display in the dropdown
            selectedValues={initialSelection} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
    )
}
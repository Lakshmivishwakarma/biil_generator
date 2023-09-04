

import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "./style";

const State = ({ name, handleChange }) => {

    const stateNames = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
    ];

    const [selectedState, setSelectedState] = useState("");

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        handleChange(event.target.value, name); // Pass the selected value and name to the handleChange function
    };



    return (
        <FormControl fullWidth mt={5} style={styles.MainContainer}>
            <InputLabel id="demo-simple-select-required-label" color="success" >State*</InputLabel>
            <Select
                color="success"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedState}
                label="State"
                onChange={handleStateChange}
            >
                {stateNames.map((stateName) => (
                    <MenuItem
                        key={stateName}
                        value={stateName}

                    >
                        {stateName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
};

export default State;
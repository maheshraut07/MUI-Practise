import { Box, TextField, MenuItem , Stack} from '@mui/material';
import React, { useState } from 'react';

function Select() {
    const [country, setCountry] = useState('');
    console.log(country)

    const[countries, setCountries] = useState<string[]>([])
    console.log(countries)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    };

    const handleChange1 = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value

        setCountries(typeof value ==='string' ? value.split(',') : value )
    }

    return (
        <Box width="250px">

            <Stack direction="row" spacing={3}>
            <TextField
                label="Select country"
                select
                value={country}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>
            
            <TextField
                label="Select countries"
                select
                value={countries}
                onChange={handleChange1}
                size = "small"
                color="secondary"
                fullWidth
                SelectProps={{
                    multiple:true,
                }
                }
            >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>

            </Stack>
           
        </Box>
    );
}

export default Select;

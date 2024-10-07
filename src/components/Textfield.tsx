import { Stack, TextField , InputAdornment} from "@mui/material"
import { useState } from "react"

function Textfield() {

    const [value, setValue] = useState('')

  return (


    // we use stack in place of div in the mui 
    
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>

        <TextField label= "name"/>                 
        <TextField label= "name" variant="outlined"/>                 
        <TextField label= "name" variant="filled"/>                  
        <TextField label= "name" variant="standard"/>                               
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="small secondary" size= "small" color = "secondary"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="form input" required/>

            <TextField 
                    label="form input" 
                    helperText="do not share you personal info with anyone"
                   />

            <TextField 
                    label="password" 
                    type="password"
                    value={value}
                    onChange={(e) =>{
                        setValue(e.target.value)
                    }}
                    error= {!value}
                    required
                    helperText={!value ? 'required':'Do not share your password with anyone'}/>

            <TextField 
                    label="Read only" 
                    inputProps={{readOnly:true}}
                    helperText = "This is the only readOnly props"
                    />


        </Stack>

        <Stack spacing={2} direction="row">
        <TextField 
                    label="Amount" 
                    inputProps={{
                        startAdornment:<InputAdornment position="start">
                            $
                        </InputAdornment>}}
                   />

            <TextField 
                    label="Weight" 
                    inputProps={{
                        endAdornment:<InputAdornment position="end">
                            KG
                            </InputAdornment>}}
                    />
        </Stack>
       
    </Stack>

  )
}

export default Textfield
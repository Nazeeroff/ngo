import { IconButton, InputAdornment, TextField,Grid } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import React from "react";

function Input({half,name,handleChange,label,autoFocus,type,handleShowPassword}){

    return (
        <Grid item cs={12} sm={half ? 6 : 12}> 
        <TextField 
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name==="password" ? {
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type==="password" ?<Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }:null}
        />
        </Grid>
    )
}

export default Input
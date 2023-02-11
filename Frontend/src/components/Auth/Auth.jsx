import { Avatar, Button, Container, Grid,Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Input from "./Input";


const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

function Auth(){
  
    const [showPassword,setShowPassword]=useState(false)
    const [isSignup,setIsSignUp]=useState(false)
    const [formData,setFormData]=useState(initialState)

    const history=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isSignup){
            
        }
        else{
         
        }
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }

    const switchMode=()=>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
        setShowPassword(false)
    }

   


    return(
        <div className="auth">
      
      <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
       
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  xs={6}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Re-enter Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </Grid>
          <Grid conatainer justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account?: Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>  
      
        </div>
        
    )
}
export default Auth
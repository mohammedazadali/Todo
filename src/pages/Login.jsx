import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate()


  const UserData = [
    {
      id: 1,
      username: "mohammed",
      password: "12345678",
    },
    {
      id: 2,
      username: "ahammed",
      password: "12345678",
    },
  ];

  //form intialization and validation starts here
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value, { resetForm }) => {
      const userExists = UserData.find(
        (user) => user.username === value.username && user.password === value.password
      );
      
      if (userExists) {
        localStorage.setItem("token", 'true');
        navigate('/dashboard')
        toast("Login Sucessfull");
      } else {
        toast("Invalid credentials");
      }
    
      resetForm();
    },
    validationSchema: validationSchema,
  });

  //form intialization and validation end here

  //password toggle function starts here
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


 


 

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Box
          sx={{
            padding: "20px",
            boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
            height: "300px",
            width: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "22px", fontWeight: "bold" }}
          >
            SignIn
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-[15px] w-full"
          >
            <TextField
              variant="outlined"
              label="UserName"
              sx={{ width: "100%" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              name="username"
              error={formik.touched.username && Boolean(formik.errors.username)}
              //   helperText={formik.touched.username && formik.errors.username}
            />
            <FormControl
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                value={formik.values.password}
                helperText={formik.touched.password && formik.errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                background: "#28B397",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginTop: "10px",
              }}
              type="submit"
            >
              SignIn
            </Button>
          </form>
        </Box>
      </section>
    </>
  );
};

export default Login;

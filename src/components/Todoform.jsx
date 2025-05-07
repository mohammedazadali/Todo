import { Add } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const Todoform = ({ data, setData }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("enter the task before add"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values, { resetForm }) => {
      setData([...data, values]);
      resetForm();
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <section className="flex justify-center w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center gap-[10px] mt-[50px]"
        >
          <TextField
            placeholder="Enter your task"
            variant="outlined"
            sx={{ width: "500px",height:'60px' }}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <Button
            variant="contained"
            sx={{ background: "#28B397",height:'60px',marginTop:'-5px' }}
            type="submit"
          >
            <Add />
          </Button>
        </form>
      </section>
    </>
  );
};

export default Todoform;

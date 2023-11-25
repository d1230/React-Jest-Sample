import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import classes from "../styles.module.css";
export default function Form() {
    React.useEffect(()=>{
        console.log(formikForm.errors)
    })
  const formikForm = useFormik({
    initialValues: { id: "", password: "" },
    validationSchema: Yup.object({
      id: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(8, "Maximum 2 Characters")
        .required("ID is Required"),
      password: Yup.string()
        .min(8, "Minimum 8 Characters")
        .max(18, "Maximum 18 Characters")
        .required("Password is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(values);
      console.log(values);
      resetForm({ values: "" });
    },
   
  });

  return (
    <>
      <form className={classes.container} onSubmit={formikForm.handleSubmit}>
        <div className="h1">Login Form</div>
        <div>
          <label>ID:</label>
          <input
          aria-label="ID"
          className={formikForm.errors.id ? 'error' : ''}
            type="text"
            name="id"
            placeholder="type your id..."
            onChange={formikForm.handleChange}
            
            value={formikForm.values.id}
          ></input>
          {formikForm.errors.id && formikForm.touched.id && (
            <p className={classes.error} aria-label="idError" data-testid="id-Error-Message">{formikForm.errors.id}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
          aria-label="Password"
          className={formikForm.errors.password ? 'error' : ''}
            type="text"
            name="password"
            placeholder="type your password..."
            onChange={formikForm.handleChange}
            value={formikForm.values.password}
          ></input>
          {formikForm.errors.password && formikForm.touched.password && (
            <p className={classes.error} aria-label="passwordError" data-testid="password-Error-Message">{formikForm.errors.password}</p>
          )}
        </div>

        <div>
          <button aria-label="LoginButton" type="submit" >LogIn</button>
        </div>
      </form>
    </>
  );
}

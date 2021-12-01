import React from "react";
import PropTypes from "prop-types";
import "./MainForm.css";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
/*
   <input  data-testid="firstName" id="firstName" {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", {required: true, pattern: /^[A-Za-z]+$/i })} />
        <input  data-testid="age"  type="number" {...register("age", { min: 18, max: 99 })} />
     
  */

const MainForm = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const getIputNameField = () => {
    return (
      <div>
        <Controller
          name="name"
          rules={{ required: "Name is required" }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              label="Name"
              fullWidth
              error={errors && errors.name}
              variant="outlined"
              {...field}
            />
          )}
        />
        
        {errors && errors.name && getErrorMSG("Error!",errors.name.message)}
      </div>
    );
  };
  const getIputPasswordField = () => {
    return (
      <div>
        <Controller
          name="password"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "cannot have numbers",
            },
          }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              label="password"
              variant="outlined"
              error={errors && errors.password}
              fullWidth
              {...field}
            />
          )}
        />
        
        {errors && errors.password && getErrorMSG("Error!",errors.password.message)}
      </div>
    );
  };

  const getIputAgeField = () => {
    return (
      <div>
        <Controller
          name="age"
          rules={{
            required: "age is required",
            min: { value: 18, message: "Min is 18" },
            max: { value: 99, message: "Max is 99" },
          }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              label="age"
              variant="outlined"
              error={errors && errors.age}
              fullWidth
              {...field}
            />
          )}
        />
        {errors && errors.age && getErrorMSG("Error!",errors.age.message)}
        
      </div>
    );
  };

  const getIputAddressField = () => {
    return (
      <div>
        <Controller
          name="address"
          rules={{ required: "address is required" }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              fullWidth
              variant="outlined"
              error={errors && errors.address}
              label="address"
              {...field}
            />
          )}
        />
        
        {errors && errors.address && getErrorMSG("Error!",errors.address.message)}
      </div>
    );
  };
  const getIputTermsField = () => {
    return (
      <div>
        <Controller
          name="terms"
          rules={{ required: "Terms are required" }}
          control={control}
          
          render={({ field }) => (
            <FormControlLabel error={errors && errors.terms} control={<Checkbox  {...field} />} label="terms" />
          )}
        />
        
        {errors && errors.terms && getErrorMSG("Error!",errors.terms.message)}
      </div>
    );
  };

  const getErrorMSG = (title, message) => {
    return (
      <div style={{margin:"auto"}}>
        <Alert severity="error">
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </div>
    );
  };
  
  const getIputButton = () => {
    return (
      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    );
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div data-testid="MainForm" role="contentinfo">
       <Paper elevation={3}  style={{ maxWidth: 600, margin: "auto" }} >
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <h1>MainForm</h1>
        <h2>Sample Form With React-Hook-Form</h2>
        <p>Form with Material UI, React-Hook-Form Validation and Unit Testing </p>
      </div>
     
      <form
        style={{ margin: "15px;font-variant: all-petite-caps;" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container style={{ maxWidth: 600, margin: "auto" }} spacing={2}>
          <Grid item xs={12} md={6} xl={6}>
            <Item> {getIputNameField()}</Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item>{getIputAgeField()}</Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item> {getIputPasswordField()}</Item>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Item> {getIputAddressField()}</Item>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <Item> {getIputTermsField()} </Item>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <Item>{getIputButton()}</Item>
          </Grid>
        </Grid>
      </form>
      </Paper>
    </div>
  );
};

MainForm.propTypes = {};

MainForm.defaultProps = {};

export default MainForm;

import React from "react";
import PropTypes from "prop-types";
import "./MainForm.css";
import { useForm, Controller } from "react-hook-form";
//import TextField from "@material-ui/core/Input";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

  const getIputNamefield = () => {
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
              variant="outlined"
              {...field}
            />
          )}
        />
        {errors && errors.name && <p>{errors.name.message}</p>}{" "}
      </div>
    );
  };
  const getIputPasswordfield = () => {
    return (
      <div>
        
         <Controller
          name="password"
          rules={{ required: "Password is required", pattern: {
            value: /^[A-Za-z]+$/i,
            message: "cannot have numbers",
          }, }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              label="password"
              variant="outlined"
              {...field}
            />
          )}
        />
        {errors && errors.password && <p>{errors.password.message}</p>}{" "}
      </div>
    );
  };

  const getIputAgefield = () => {
    return (
      <div>
      
             <Controller
          name="age"
          rules={{ required: "age is required", min: { value: 18, message: "Min is 18" },
          max: { value: 99, message: "Max is 99" },}}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              label="age"
              variant="outlined"
              {...field}
            />
          )}
        />
        {errors && errors.age && <p>{errors.age.message}</p>}{" "}
      </div>
    );
  };

  const getIputTermsfield = () => {
    return (
      <div>
      <Controller
        name="terms"
        rules={{ required: "Terms are required"}}
        control={control}
        render={({ field }) => (
          <FormControlLabel control={<Checkbox {...field} />} label="terms" />
        )}
      />
      
      {errors && errors.terms && <p>{errors.terms.message}</p>}{" "}
    </div>
    );
  };

  const getIputButton = () => {
    return (
      <div>
       <Button type="submit" variant="contained">Submit</Button>
    </div>
    );
  };

  const getIputAddressfield = () => {
    return (
      <div>
        <Controller
          name="address"
          rules={{ required: "address is required" }}
          control={control}
          render={({ field }) => (
            <TextField //required
              defaultValue=""
              variant="outlined"
              label="address"
              {...field}
            />
          )}
        />
        {errors && errors.address && <p>{errors.address.message}</p>}{" "}
      </div>
    );
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div data-testid="MainForm" role="contentinfo">
      <form style={{margin: '15px;font-variant: all-petite-caps;'}} onSubmit={handleSubmit(onSubmit)}>
        {getIputNamefield()}
        {getIputAgefield()}
        {getIputPasswordfield()}
        {getIputAddressfield()}
        {getIputTermsfield()}
        {getIputButton()}
      </form>
    </div>
  );
};

MainForm.propTypes = {};

MainForm.defaultProps = {};

export default MainForm;

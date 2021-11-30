import React from "react";
import PropTypes from "prop-types";
import "./MainForm.css";
import { useForm, Controller } from "react-hook-form";
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
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div data-testid="MainForm" role="contentinfo">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: "Name is required" })}
          />
                     {errors && errors.name && <p>{errors.name.message}</p>}
        
        </div>
        <div>
          <label htmlFor="age">age</label>
       
          <input name="age"  id="age"  type="number" {...register("age",  {required:"Age is required", min: {value:18, message:"Min is 18"}, max: {value:99, message:"Max is 99"} })} />
          {errors && errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required ",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "cannot have numbers",
              },
            })}
          />
 {errors && errors.password && <p>{errors.password.message}</p>}
        
        </div>
        <div>
          <label htmlFor="terms">terms</label>
          <input type="checkbox" name="terms" {...register("terms")} />
        
        {errors && errors.terms && <p>{errors.terms.message}</p>}
        
        
        </div>

       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

MainForm.propTypes = {};

MainForm.defaultProps = {};

export default MainForm;

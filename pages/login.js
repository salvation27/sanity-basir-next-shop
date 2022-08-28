import { Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Layout} from "../componets";

const Login = () => {

    const {control,handleSubmit,formState:{errors}} = useForm()
    const submitHendler = async ({email,password})=> {

    }
  return (
    <Layout title="Login" description="описание Login">
      <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
        Login
      </Typography>
      <form
        onSubmit={handleSubmit(submitHendler)}
        className="form_wrap"
        style={{ width: "600px", margin: "0 auto" }}
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          }}
          render={({ field }) => (
            <TextField
              variant="outlined"
              className="cusom_class_fild"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: "email" }}
              error={Boolean(errors.email)}
              helperText={
                errors.email
                  ? errors.email.type === "pattern"
                    ? "Email is not valid"
                    : "Email is required"
                  : ""
              }
              {...field}
            ></TextField>
          )}
        ></Controller>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field }) => (
            <TextField
              variant="outlined"
              className="cusom_class_fild"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: "password" }}
              error={Boolean(errors.password)}
              helperText={
                errors.password
                  ? errors.password.type === "minLength"
                    ? "Password length is more then 5"
                    : "Password is required"
                  : ""
              }
              {...field}
            ></TextField>
          )}
        ></Controller>
        <Button type="submit" fullWidth variant="contained">
          Login
        </Button>
        <div className="">
          Not account{" "}
          <Link href="/register" passHref>
            <strong>Register</strong>
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
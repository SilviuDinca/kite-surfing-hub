import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Link as MuiLink,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Logo from "../../assets/images/Logo.png";
import styles from "./signUp.module.css";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .min(5, "Username should be of minimum 5 characters length")
    .required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Container className={styles.container} maxWidth="xs">
      <Grid container direction="column">
        <Grid item display="flex" justifyContent="center" mb={6}>
          <img src={Logo} className={styles.logo} alt="kite" />
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid item>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username*"
              name="username"
              autoFocus
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password*"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm password*"
              type="password"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </Grid>
          <Grid item mt={4}>
            <Button type="submit" fullWidth variant="contained">
              Sign Up
            </Button>
          </Grid>
        </form>
        <Grid item mt={2}>
          <MuiLink to="/" component={Link}>
            Already have an account? Sign in
          </MuiLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;

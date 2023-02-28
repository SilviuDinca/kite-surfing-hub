import {
  Button,
  Container,
  Grid,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { signIn } from "../../api/auth";
import styles from "./signIn.module.css";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .min(5, "Username should be of minimum 5 characters length")
    .required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignIn = (props) => {
  const { onLogin } = props;
  const onSubmit = async (values) => {
    const res = await signIn(values.username, values.password);
    onLogin(res.data);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
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
          <Grid item mt={4}>
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
          </Grid>
        </form>
        <Grid item mt={2}>
          <MuiLink to="/signUp" component={Link}>
            Don't have an account? Sign Up
          </MuiLink>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SignIn;

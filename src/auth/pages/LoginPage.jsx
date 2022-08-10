import { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  checkingAuthentications,
  startGoogleSignin,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = (e) => {
    console.log("Google Sign In");
    dispatch(startGoogleSignin());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              required
              fullWidth
              type="email"
              placeholder="coreo@dominio.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Comtraseña"
              required
              fullWidth
              type="password"
              placeholder="introduce tu contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container sx={{ mt: 2 }} display={errorMessage ? "" : "none"}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 2 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link to="/auth/register" component={RouterLink} sx={{ mt: 1 }}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

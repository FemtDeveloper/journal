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
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [
    (value) => value.length >= 6,
    "El nombre debe tener al menos 6 caracteres",
  ],
  email: [
    (value) => value.includes("@"),
    'El correo debe tener una "@" entre sus caracteres',
  ],
  password: [
    (value) => value.length >= 6,
    "El password debe tener un mínimo de seis carácteres",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    displayNameValid,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log(formState);
  };

  return (
    <AuthLayout title="Crea tu cuenta">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {/* <h1> Form {isFormValid ? "Valid" : "Invalid"}</h1> */}
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre y apellido"
              required
              fullWidth
              type="text"
              placeholder="Tu nombre"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
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
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              required
              fullWidth
              type="password"
              placeholder="introduce tu contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link to="/auth/login" component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

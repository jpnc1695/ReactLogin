import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const cinza = grey[50];
const btnstyle = {
  margin: "8px 0",
};
const textCss = {
  color: cinza,
};
const paperStyle = {
  padding: 20,
  height: "55vh",
  width: 500,
  margin: "20px auto",
  backgroundColor: "rgba(255,255,255,0.9)",
};

const containerStyle = {
  backgroundImage: "url(/bokeh-313993_1280.jpg)",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/jpnc1695" target="_blank" rel="noreferrer">
        João Paulo Nunes Costa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Cadastro = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");

  const stateSenha = (e) => {
    setPassWord(e.target.value);
  };

  const stateConfirmarSenha = (e) => {
    setConfirmPassWord(e.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", bgcolor: "rgb(255,0,0)" }}
    >
      <CssBaseline />
      <Grid
        style={containerStyle}
        container
        component="main"
        sx={{ height: "100vh" }}
      >
        <Paper elevation={10} style={paperStyle}>
          <TextField
            label="E-mail"
            placeholder="Digite seu e-mail"
            sx={{ mt: 1, mb: 1 }}
            type="email"
            fullWidth
            required
          />
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="outlined" onChange={stateSenha}>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="outlined" onChange={stateConfirmarSenha}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmar Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="COnfirmar Senha"
            />
              {
                passWord !== confirmPassWord ? <FormHelperText id="component-helper-text"> As senhas devem ser iguais. </FormHelperText>:""
              }
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={() =>{
              console.log(passWord)
            }}
            fullWidth
          >
            Cadastrar
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            type="submit"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Voltar
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cadastro;

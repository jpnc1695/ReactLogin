import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Paper, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const cinza = grey[50];
const btnstyle = { 
  margin: "8px 0" 
};
const textCss = {
   color: cinza 
  };
const paperStyle = {
  padding: 20,
  height: "55vh",
  width: 400,
  margin: "20px auto",
  backgroundColor: "rgba(255,255,255,0.9)",
};

const containerStyle = {
  backgroundImage: "url(/bokeh-313993_1280.jpg)",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Cadastro = () => {

const navigate = useNavigate()
  
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
            style={textCss}
            label="Digite seu usuário"
            placeholder="Digite seu usuário"
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            required
          />
          <TextField
            label="E-mail"
            placeholder="Digite seu e-mail"
            sx={{ mt: 1, mb: 1 }}
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Senha"
            placeholder="Digite sua Senha"
            sx={{ mt: 1, mb: 1 }}
            type="password"
            fullWidth
            required
          />
          <TextField
            label="Confirmar Senha"
            placeholder="Digite sua Senha novamente"
            sx={{ mt: 1, mb: 1 }}
            type="password"
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cadastro;

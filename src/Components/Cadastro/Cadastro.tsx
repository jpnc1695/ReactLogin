import * as React from "react";
import {
  Button,
  Paper,
  TextField,
  Link,
  Container,
  Grid,
} from "@mui/material";

const paperStyle = {
  padding: 20,
  height: "55vh",
  width: 400,
  margin: "20px auto",
  backgroundColor: "rgba(255,255,255, 0.1)",
  
};

const containerStyle ={
    backgroundImage: "url(/dahlia-6620610_1280.jpg)",
    height: '100%',
    width: '100%'
}

const Cadastro = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const btnstyle = { margin: "8px 0" };

  return (
    <Grid style={containerStyle} container component="main" sx={{ height: '100vh' }}>
      <Paper elevation={10} style={paperStyle}>
        <TextField
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
      </Paper>
    </Grid>
  );
};

export default Cadastro;

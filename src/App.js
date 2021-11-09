import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Container component="article" maxWidth="sm">
         <Typography align="center" variant="h3" component="h1">Formulario cadastro</Typography>
          <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
        </Container>
      </Fragment>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length != 11)
    return { valido: false, texto:"CPF deve conter 11 digitos" }
  else
    return { valido: true, texto:"" } 
}

export default App;

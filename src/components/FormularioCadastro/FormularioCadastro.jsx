import React, { useState } from 'react'
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core'

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCPF] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } })
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value
          if (tempNome.length >= 25) tempNome = tempNome.substr(0, 25)
          setNome(tempNome)
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          let tempSobrenome = event.target.value
          if (tempSobrenome.length >= 25)
            tempSobrenome = tempSobrenome.substr(0, 25)
          setSobrenome(tempSobrenome)
        }}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setCPF(event.target.value)
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value)
          setErros({ cpf: ehValido })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            checked={novidades}
            name="novidades"
          />
        }
        label="Novidades"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro

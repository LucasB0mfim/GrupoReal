import {
  Box,
  Alert,
  Container,
  Main,
  TextArea,
  Btn,
  Aside,
  Close
} from './styles'
import Header from '../../components/Header'
import { useState } from 'react'

const Colaborador = () => {
  const [ativo, setAtivo] = useState(false)

  return (
    <>
      <Header />
      <Box>
        {ativo && (
          <Alert>
            <p>Por favor, insira uma cotação valida!</p>
            <Close onClick={() => setAtivo(!ativo)}>x</Close>
          </Alert>
        )}
        <Container>
          <Main>
            <TextArea placeholder="Cole sua cotação aqui!" />
            <Btn type="button" onClick={() => setAtivo(!ativo)}>
              CONVERTER
            </Btn>
          </Main>
          <Aside>
            <TextArea disabled />
          </Aside>
        </Container>
      </Box>
    </>
  )
}

export default Colaborador

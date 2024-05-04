import { Asidee, Box, Btn, CampoBtn } from './styles'

const Aside = () => (
  <Asidee>
    <Box>
      <h1>Bem vindo!</h1>
      <CampoBtn>
        <Btn to="/colaborador">Colaborador</Btn>
        <Btn to="/visitante">Visitante</Btn>
      </CampoBtn>
    </Box>
  </Asidee>
)

export default Aside

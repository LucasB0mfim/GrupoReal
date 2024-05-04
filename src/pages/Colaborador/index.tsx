import { Btn, Container } from './styles'
import maintenance from '../../assets/images/maintenance.png'
const Colaborador = () => (
  <Container>
    <h1>Estamos em manutenção, volte outra hora!</h1>
    <img src={maintenance} />
    <Btn to="/home">Início</Btn>
  </Container>
)

export default Colaborador

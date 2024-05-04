import { Container, Btn } from './styles'
import maintenance from '../../assets/images/maintenance.png'

const Visitante = () => (
  <Container>
    <h1>Estamos em manutenção, volte outra hora!</h1>
    <img src={maintenance} />
    <Btn to="/">Início</Btn>
  </Container>
)

export default Visitante

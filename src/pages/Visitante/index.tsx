import { Container, Btn } from './styles'
import maintenance from '../../assets/images/maintenance.png'

const Visitante = () => (
  <Container>
    <h1>Estamos em manutenção, por favor, volte outra hora!</h1>
    <img src={maintenance} />
    <Btn to="/home">Inicio</Btn>
  </Container>
)

export default Visitante

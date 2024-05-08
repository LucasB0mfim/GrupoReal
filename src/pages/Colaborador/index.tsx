import { Container, Main, TextArea, Btn, Aside } from './styles'
import Header from '../../components/Header'

const Colaborador = () => (
  <>
    <Header />
    <Container>
      <Main>
        <TextArea placeholder="Cole sua cotação aqui!" />
        <Btn type="button">CONVERTER</Btn>
      </Main>
      <Aside>
        <TextArea className="TextArea--two" disabled />
      </Aside>
    </Container>
  </>
)

export default Colaborador

import {
  Btn,
  Container,
  Converter,
  ConversionArea,
  ConversionAreatwo,
  ConverterTwo
} from './styles'
import Header from '../../components/Header'

const Colaborador = () => (
  <>
    <Header />
    <Container>
      <ConversionArea>
        <Converter placeholder="Cole sua cotação aqui" />
        <Btn type="button">CONVERTER</Btn>
      </ConversionArea>
      <ConversionAreatwo>
        <ConverterTwo disabled />
      </ConversionAreatwo>
    </Container>
  </>
)

export default Colaborador

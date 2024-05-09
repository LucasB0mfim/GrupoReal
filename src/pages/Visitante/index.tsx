/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Main,
  Title,
  SubTitle,
  IconBox,
  Icon,
  HelloSection,
  FunctionSection,
  CollaboratorsSection,
  LinkL,
  LinkV,
  BoxL,
  BoxV
} from './styles'

import Header from '../../components/Header'
import visityHome from '../../assets/images/visityHome.gif'
import Lucas from '../../assets/images/LucasBomfim.jpg'
import Vitor from '../../assets/images/FabianoVitor.jpg'
import linkedin from '../../assets/images/linkedin.png'

const Visitante = () => (
  <>
    <Header />
    <Main>
      <Container>
        <HelloSection>
          <img src={visityHome} />
          <Title>Bem vindo, visitante!</Title>
          <p>
            A fim de simplificar a tarefa dos profissionais encarregados de
            alinhar as cotações dos clientes com os registros internos da
            empresa, é essencial capacitar esses colaboradores para que possam
            efetivamente "traduzir" as cotações de forma prática e alinhada com
            os padrões da empresa.
          </p>
        </HelloSection>

        <FunctionSection>
          <Title>Como funciona?</Title>
          <p>
            Basta inserir a cotação que deseja "traduzir" no campo à esquerda,
            onde está indicado "Cole sua cotação aqui", e em seguida clicar em
            CONVERTER. Logo após a cotação "Client-Side" será convertida em uma
            cotação "Company-Side".
          </p>
        </FunctionSection>

        <CollaboratorsSection>
          <Title>Colaboradores</Title>
          <IconBox>
            <Icon>
              <BoxL>
                <a
                  href="https://www.linkedin.com/in/lucasbomfim06/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkL src={linkedin} />
                </a>

                <img src={Lucas} />

                <SubTitle>Lucas Bomfim Sobral</SubTitle>
              </BoxL>

              <BoxV>
                <a
                  href="https://www.linkedin.com/in/vit0rh0landa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkV src={linkedin} />
                </a>

                <img src={Vitor} />
                <SubTitle>Fabiano Vitor de holanda Coelho</SubTitle>
              </BoxV>
            </Icon>
          </IconBox>
        </CollaboratorsSection>
      </Container>
    </Main>
  </>
)

export default Visitante

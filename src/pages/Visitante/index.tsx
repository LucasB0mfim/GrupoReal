import {
  Container,
  Main,
  Title,
  SubTitle,
  IconBox,
  Icon,
  HelloSection,
  FunctionSection,
  CollaboratorsSection
} from './styles'

import Header from '../../components/Header'
import visityHome from '../../assets/images/visityHome.gif'
import Lucas from '../../assets/images/LucasBomfim.jpg'
import Vitor from '../../assets/images/FabianoVitor.jpg'

const Visitante = () => (
  <>
    <Header />
    <Main>
      <Container>
        <HelloSection>
          <img src={visityHome} />
          <Title>Bem vindo, visitante!</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim
            fuga vitae eos quam magni aliquam, consequuntur nulla praesentium
            impedit, reiciendis temporibus id quibusdam libero! Iste nemo
            officiis culpa animi? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quam rerum eligendi aliquam excepturi recusandae
            placeat beatae voluptate perspiciatis iure labore maiores ut debitis
            animi, maxime optio delectus eos asperiores officia? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deleniti, ratione totam
            mollitia, distinctio eaque voluptate dolor ullam non deserunt ipsa
            provident, culpa eius. Voluptate in corporis accusantium? Excepturi,
            tenetur delectus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Non, excepturi. Reiciendis perspiciatis laudantium
            molestiae enim, dolorum officiis quisquam sequi necessitatibus earum
            eius eligendi doloremque nemo amet praesentium! Quidem, aliquid
            quasi.
          </p>
        </HelloSection>

        <FunctionSection>
          <Title>Como funciona?</Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa
            nobis molestiae rem eaque placeat, id necessitatibus consequatur
            temporibus quo deleniti molestias, aperiam labore vel nisi mollitia
            et facere eos! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Obcaecati veritatis, a odio nam, porro sed doloremque quae
            rerum ipsum excepturi sequi omnis, ducimus vitae expedita sapiente.
            Quibusdam corporis vitae animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro sequi voluptates veniam. Nam
            dolores omnis laborum nemo illum quisquam ratione cum, facere,
            accusantium, ipsam pariatur eius. Exercitationem optio assumenda
            debitis.
          </p>
        </FunctionSection>

        <CollaboratorsSection>
          <Title>Colaboradores</Title>
          <IconBox>
            <Icon>
              <a
                href="https://www.linkedin.com/in/lucasbomfim06/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Lucas} />
              </a>
              <SubTitle>
                <a
                  href="https://www.linkedin.com/in/lucasbomfim06/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                Lucas Bomfim Sobral
              </SubTitle>
            </Icon>

            <Icon>
              <a
                href="https://www.linkedin.com/in/vit0rh0landa/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Vitor} />
              </a>
              <SubTitle>
                <a
                  href="https://www.linkedin.com/in/vit0rh0landa/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                Fabiano Vitor de holanda Coelho
              </SubTitle>
            </Icon>
          </IconBox>
        </CollaboratorsSection>

        <p>
          Clique em nossas fotos ou nomes para nos acompanhar no{' '}
          <b>LinkedIn!</b>
        </p>
      </Container>
    </Main>
  </>
)

export default Visitante

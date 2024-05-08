import { Container, Title, Box, Collaborators, Operation } from './styles'

import Header from '../../components/Header'
import account from '../../assets/images/account.gif'

const Visitante = () => (
  <>
    <Header />
    <Container>
      <Box>
        <img src={account} />
        <Title>Bem vindo, visitante!</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim
          fuga vitae eos quam magni aliquam, consequuntur nulla praesentium
          impedit, reiciendis temporibus id quibusdam libero! Iste nemo officiis
          culpa animi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quam rerum eligendi aliquam excepturi recusandae placeat beatae
          voluptate perspiciatis iure labore maiores ut debitis animi, maxime
          optio delectus eos asperiores officia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deleniti, ratione totam mollitia,
          distinctio eaque voluptate dolor ullam non deserunt ipsa provident,
          culpa eius. Voluptate in corporis accusantium? Excepturi, tenetur
          delectus! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Non, excepturi. Reiciendis perspiciatis laudantium molestiae enim,
          dolorum officiis quisquam sequi necessitatibus earum eius eligendi
          doloremque nemo amet praesentium! Quidem, aliquid quasi.
        </p>
        <h1>Colaboradores</h1>
        <Collaborators>
          <div>
            <img src={account} />
            <h3>Lucas Bomfim Sobral</h3>
          </div>
          <div>
            <img src={account} />
            <h3>Fabiano Vitor de holanda Coelho</h3>
          </div>
        </Collaborators>
        <Operation>
          <h1>Como funciona?</h1>
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
        </Operation>
      </Box>
    </Container>
  </>
)

export default Visitante

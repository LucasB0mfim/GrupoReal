import { Top } from './styles'
import logo from '../../assets/images/LogoReal.png'

const Header = () => (
  <Top>
    <a href="/">
      <img src={logo} draggable="false" />
    </a>
    <a href="/">Sair</a>
  </Top>
)

export default Header

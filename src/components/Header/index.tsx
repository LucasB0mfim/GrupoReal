import { Top, Link } from './styles'
import logo from '../../assets/images/LogoReal.png'
import home from '../../assets/images/home.gif'

const Header = () => (
  <Top>
    <Link href="/">
      <img src={logo} draggable="false" />
    </Link>
    <Link href="/">
      Sair
      <img src={home} className="icon--home" />
    </Link>
  </Top>
)

export default Header

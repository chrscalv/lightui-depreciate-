import Dynamic from 'next/dynamic'
import cardSubTitle from '../components/Card/CardSubTitle'
import cardTitle from '../components/Card/CardTitle'
import NavMenu from '../components/Navbar/NavMenu'
import NavTitle from '../components/Navbar/NavTitle'
import Menu from '../components/Menu/Menu'
import Container from '../components/Container';
import Avatar from '../components/Avatar/Avatar'

export default function home() {
  const Button = Dynamic(() => import('../components/Button/Button'))
  const Navbar = Dynamic(() => import('../components/Navbar/Navbar'))
  return (
    <>
      <main>
        <Navbar>
          <NavTitle>
            <img src="" alt="" />
            Brand
          </NavTitle>
          <NavMenu>
            <Menu to="/">Home</Menu>
            <Menu next to="/login">Pricing</Menu>
          </NavMenu>
        </Navbar>
        <Container>
          <Button />
          <Avatar  />
          <Avatar size="md" alt="test"/>
          <Avatar size="lg" />
          <Avatar size="xl" />
        </Container>
      </main>
    </>
  )
}
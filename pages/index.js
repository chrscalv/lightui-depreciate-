import Dynamic from 'next/dynamic'
import NavMenu from '../components/Navbar/NavMenu'
import NavTitle from '../components/Navbar/NavTitle'
import Menu from '../components/Menu/Menu'

import { 
  Avatar, 
  Container, 
  Button, 
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardSubTitle  
} from '../components'

export default function home() {
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
          <Card >
            <CardImage />
            <CardBody>
              <CardTitle>Hallo</CardTitle>
              <CardSubTitle />
              <CardText > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
            </CardBody>
          </Card>
        </Container>
      </main>
    </>
  )
}
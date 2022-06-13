import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'

const Navigationbar = () => {
    return(
        <>
  <Navbar bg="primary" className="w-100" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</>
      
    )
}

export default Navigationbar
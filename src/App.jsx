import List from './components/List'
import { Container,Navbar } from 'react-bootstrap'

const App = () => {
    return (
    <Container fluid>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>Movie List</Navbar.Brand>
        </Navbar>
        <List></List>
    </Container>
    )
}

export default App
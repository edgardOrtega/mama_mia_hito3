import Header from "./Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home =() =>{
    return(
        <>
        <Header titulo="Pizzería Mamma Mia!" descripcion="Tenemos las mejores pizzas que podrás encontrar"/>
        <Container >
            <Row className="mt-4">

            {pizzas.map((pizza) =>(
                <Col>
                    <CardPizza name={pizza.name} price={pizza.price} desc={pizza.desc} ingredients={pizza.ingredients} img={pizza.img}/>
                </Col>
            ))}
            </Row>
        </Container>

        </>
    )
}

export default Home;
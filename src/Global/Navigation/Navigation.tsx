import './Navigation.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Navigation = () => {
    return ( 
        <Container className='navigation-main' fluid>
            <Row className='navigation-main-row'>
                <Col xs sm lg>
                    <h1 className='navigation-main-title'> Dylan Drechsel </h1>
                </Col>
                <Col xs sm lg>
                    <h1> TestTest </h1>
                </Col>
                <Col xs sm lg>
                    <h1> Navigation </h1>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Navigation;
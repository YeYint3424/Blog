import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from '../assets/imgs/notFound.jpg'; 

const NotFound = () => {
    return ( 
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '40px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)' }}>
              <div className="text-center">
                <img src={notFound} alt="404 Not Found" style={{ maxWidth: '100%', marginBottom: '20px' }} width={480} height={300}/>
                <h1 style={{ fontSize: '36px', marginBottom: '10px', color: '#333' }}>404 - Page Not Found</h1>
                <p style={{ fontSize: '18px', marginBottom: '15px', color: '#666' }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Button variant="primary" as={Link} to="/" style={{ fontSize: '16px', padding: '10px 20px' }}>Go to Home</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
     );
}
 
export default NotFound;
import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card"; 
import { Link } from 'react-router-dom';
function Mehndi(){
  return(
    <Container fluid>
      <h1><b>Mehndi Designs</b></h1>
        <Row>
            <Col>
            <Card className="md-2" style={{ border:'0px', marginBottom:'50px',marginTop:'50px'}}>
              <Link to='/bridal'><Card.Img src='https://i.ibb.co/tJdLJ11/meh.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center',
                }}>
                <Link to='/bridal' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Bridal</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px',marginTop:'50px'}}>
              <Link to='/stylish'><Card.Img src='https://i.ibb.co/qCYPPxy/images-34-1-1.jpg' alt='img'/></Link> 
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center',
                marginLeft:'5px'}}>
                <Link to='/stylish' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Stylish</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px',  marginTop:'50px'}}>
              <Link to='/half'><Card.Img src='https://i.ibb.co/QdJKS3X/images-33.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center'}}>
                <Link to='/half' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>HalfHand</Link>
              </Card.Text>
              </Card>
              </Col>
        </Row>
        <Row>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px',marginTop:'50px'}}>
              <Link to='/arabic'><Card.Img src='https://i.ibb.co/C5qSSh4/images-32.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center'}}>
                <Link to='/arabic' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Arabic</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px',marginTop:'50px'}}>
              <Link to='/back'><Card.Img src='https://i.ibb.co/mJtFx24/images-37.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center'}}>
                <Link to='/back' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>BackHand</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px',  marginTop:'50px'}}>
              <Link to='/full'><Card.Img src='https://i.ibb.co/kQT56DQ/images-35.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign:'center'}}>
                <Link to='/full' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>FullHand</Link>
              </Card.Text>
              </Card>
              </Col>
        </Row>
        </Container>
  )
}
export default Mehndi;

import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
function Paint(){
  return(
    <Container fluid>
      <h1><b>Paintings</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/pencil'><Card.Img src='https://onlineframing.in/cdn/shop/files/5502726_b4a3_2.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/pencil' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Pencil Drawings</Link>
              </Card.Text>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Link to='/oil'><Card.Img src='https://i.pinimg.com/736x/75/71/6d/75716d7c0d52fdd552014e05a3babef5.jpg' alt='img'/></Link>
                <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/oil' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Oil Pastes/Sketchs</Link> 
              </Card.Text>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Link to='/modern'><Card.Img src='https://img.freepik.com/premium-photo/fullcolor-generative-ai-abstract-modern-art-drawing-young-woman_28914-18943.jpg' alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'
              }}>
                <Link to='/modern' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',}}>Modern Arts</Link>
              </Card.Text>
              </Card>
          </Col>
          

        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Link to='/water'><Card.Img src='https://i.ytimg.com/vi/Iz1icodk-3M/maxresdefault.jpg' alt='img'/></Link>
                <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/water' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Water Paintings</Link> 
              </Card.Text>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Link to='/acrylic'><Card.Img src='https://i.ibb.co/QJzv4kx/hq720.jpg'/></Link>
                <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/acrylic' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Acrylic Paintings</Link> 
              </Card.Text>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Link to='/nature'><Card.Img src='https://i.ibb.co/jvQbN6y/images-1.jpg' alt='img'/></Link>
                <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/nature' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Nature Paintings</Link> 
              </Card.Text>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Paint;

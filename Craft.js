import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card"; 
import { Link } from 'react-router-dom';
function Craft(){
  return(
    <Container fluid>
      <h1><b>Crafts</b></h1>
        <Row>
            <Col>
            <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/paper'><Card.Img src='https://i.ibb.co/9rGKzSr/download-2.jpg' alt='img' style={{
                  height :'20rem'
                }}/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/paper' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Paper Crafts</Link>
              </Card.Text>                                                                                                                                                                                                                                         
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/frame'><Card.Img src='https://i.ibb.co/NS7VQNP/istockphoto-1454381626-170667a.webp' alt='img' style={{
                  height :'20rem'
                }}/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/frame' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Frame Works</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'60px'}}>
              <Link to='/pen'><Card.Img src='https://www.kidsartncraft.com/wp-content/uploads/2020/10/DIY-Pencil-Toppers-for-Kids.jpg'alt='img'/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/pen' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Pencil Crafts</Link>
              </Card.Text>
              </Card>
              </Col>
        </Row>
        <Row>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/sewing'><Card.Img src='https://i.ibb.co/brzvh6N/images-2.jpg'alt='img'
                style={{
                  height :'20rem'
                }}/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/sewing' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Sewing</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/pot'><Card.Img src='https://i.pinimg.com/736x/4f/f7/a0/4ff7a05442a00f17ceaacc90abad57e6.jpg'alt='img' style={{
                  height :'20rem'
                }}/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/pot' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Pottery/Bottle Crafts</Link>
              </Card.Text>
              </Card>
              </Col>
              <Col>
              <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Link to='/cali'><Card.Img src='https://i.ibb.co/j4xYLwn/images-3.jpg' alt='img'style={{
                  height :'20rem'
                }}/></Link>
              <Card.Text style={{
                paddingTop:'20px',
                textAlign: 'center'}}>
                <Link to='/cali' style={{
                  textDecoration:'none',
                  color: 'black',
                  fontWeight:'bold',
                }}>Calligraphy</Link>
              </Card.Text>
              </Card>
              </Col>
        </Row>
        </Container>
  )
}
export default Craft;

import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Product(){
  return(
    <Container fluid>
      <h1><b>Our Products</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Card.Img src='https://i.ibb.co/H4qqdxs/Screenshot-2024-01-04-094333.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/WFgH05s/Screenshot-2024-01-04-094346.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/wS3LB5C/Screenshot-2024-01-04-094359.png ' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/CnztMdJ/Screenshot-2024-01-04-094502.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/PhcgqXQ/Screenshot-2024-01-04-094422.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/CQ3GcGR/Screenshot-2024-01-04-094441.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/M6zLPtg/Screenshot-2024-01-04-094413.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/JmC4gQM/Screenshot-2024-01-04-094512.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/BwDFSsV/Screenshot-2024-01-04-094534.png' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Product;
 
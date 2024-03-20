import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Paper(){
  return(
    <Container fluid>
      <h1><b>Paper Crafts</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Card.Img src='https://i.ibb.co/3zZm2RL/download-42-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/2y6yJZ6/download-43-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/GVkwkwM/download-44-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/tzbxvH4/images-64-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/0qBJTGj/images-65-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/VjL7Hnd/download-45-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/7tFnLR5/images-66-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/dbnKVFH/images-67-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/gR23YkW/download-46-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/848Zccs/images-70-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/B2xMjJS/images-69-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/Y08SXbH/images-68-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Paper;
 
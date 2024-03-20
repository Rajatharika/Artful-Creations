import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Acrylic(){
  return(
    <Container fluid>
      <h1><b>Acrylic Paintings</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Card.Img src='https://i.ibb.co/stM5qb5/Acry-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/5rwyprB/download-7-3.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/8zkJNcN/download-13-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/n8KnHhp/images-11-5.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/hccygbz/download-9-3.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/dQDQCFt/download-12-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/hZx5ggj/images-10-5.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/cXm9571/download-14-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/tDxG5Xw/download-15-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/pzfqT47/images-17-2.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/4KjtFxD/images-16-3.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/s9CB66f/download-16-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Acrylic;

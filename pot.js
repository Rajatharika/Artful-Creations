import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Pot(){
  return(
    <Container fluid>
      <h1><b>Pottery/Bottle Crafts</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Card.Img src='https://i.ibb.co/68JHpJq/pot-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/n1v4DcR/download-58-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/f2DB1Wn/images-95-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/fSND5yM/images-96-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/DC9cdhF/images-97-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/2t3LQDv/images-98-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/dgtSYft/images-99-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/6FRNRvg/images-100-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/SdVN2hn/images-2024-01-03-T145255-476-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/6RQDy19/images-2024-01-03-T145855-775-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/QnNRMg5/images-2024-01-03-T145900-484-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.ibb.co/YkrzrQV/images-2024-01-03-T145907-873-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Pot;
 
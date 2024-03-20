import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Art.css'
import './App.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Modern(){
  return(
    <Container fluid>
      <h1><b>Modern Arts</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px'}}>
                <Card.Img src='https://i.postimg.cc/2SqPN40S/modern-a-1.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/ZRg7TqVz/download-7-2.jpg' alt='img' style={{ height:'50vh', width:'50vh'
                }}/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/bJbbtNqh/download-8-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/1tHmTLHF/download-9-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/JhTm5b43/download-10-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/nrfHXnhN/images-10-4.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/KjpJ983H/images-11-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/xd9MzScJ/images-12-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/VN5MRWWm/images-13-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        <Row>
         <Col>
          <Card style={{  border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/RCT7vhhr/images-14-2.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/gjr29gr2/images-15-2.jpg'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'0px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://i.postimg.cc/gjPbs4R7/images-16-1.jpg' alt='img'  style={{ height:'50vh', width:'50vh'
                }}/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Modern;

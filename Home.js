import React from 'react'
import Nav from './Nav'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    CardLink,
    InputGroup,
    FormControl,
  } from "react-bootstrap";
import NavScrollExample from './navbar';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div class="container"> 
    <div className='px-2'>
    <Container
      fluid
      style={{
        maxWidth: "80%",
        marginLeft:'25%'
      }}
    >
      <Sidebar/>
      <Row md='14'> 
        <Col md="10">
          <Carousel> 
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/fSDdHyh/Screenshot-2023-12-19-151835.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/qkZ0mBG/Screenshot-2023-12-19-153359.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/CwJbXVc/Screenshot-2023-12-19-154233.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/cTp8HtP/Screenshot-2023-12-19-153452.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/C5QmvL8/Screenshot-2023-12-19-151949.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/BLpf2nK/Screenshot-2023-12-19-153124.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/4VRWY7F/Screenshot-2023-12-19-160349.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/sW07P4R/Screenshot-2023-12-19-153714.png"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/kccB6Zg/Screenshot-2023-12-19-151639.png"
                alt="Third slide"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/kyK4b46/Screenshot-2023-12-20-150228.png"
                alt="Third slide"
              />
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
      </Container>
      <div class="row align-items-start">
        <div class="row">
          <Card
            style={{
              width: "20rem",
              backgroundColor: "transparent",
              border: "0px",
            }}
          >
            <Link to='/paintt'><Card.Img
              variant="top"
              src="https://i.ibb.co/vDKwDhj/pexels-valeriia-miller-3547625-2.jpg"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
                marginTop: "60px",
              }}
            /></Link>
            <Card.Body>
            <Card.Title
                style={{
                  textAlign: "center",
                  paddingLeft:'33px'  
                }}
              >
                Paintings
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "transparent",
              border: "0px",
            }}       
          >
            <Link to='/Craft'><Card.Img
              variant="top"
              src="https://i.ibb.co/SyjjWm3/craft.jpg"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
                marginTop: "65px",
              }}
            /></Link>
            <Card.Body>
            <Card.Title
                style={{
                  textAlign: "center",
                  paddingLeft:'33px'
                }}
              >
                Crafts
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "transparent",
              border: "0px",
            }}
          >
            <Link to='/Mehndi'><Card.Img
              variant="top"
              src="https://i.ibb.co/q0Yw0Ld/rr.jpg"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
                marginTop: "60px",
              }}
            /></Link>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  paddingLeft:'33px'
                }}
              >
                Mehndi Designs
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "transparent",
              border: "0px",
            }}
          >
            <Link to='/product'><Card.Img
              variant="top"
              src="https://i.ibb.co/bJHqWPT/vibrant-watercolor-paintings-messy-desk-showcase-artist-creativity-generated-by-ai-24640-100488.jpg"
              style={{
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
                marginTop: "65px",
              }}
            /></Link>
            <Card.Body>
            <Card.Title
                style={{
                  textAlign: "center",
                  paddingLeft:'33px'
                }}
              >
                Our Products
              </Card.Title>
            </Card.Body>
          </Card>
          <div style={{
            marginleft:'35px'
          }}> <NavScrollExample /> </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}                                                                    
export default Home

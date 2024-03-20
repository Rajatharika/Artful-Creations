import React from "react";
import "./Art.css";
import { useLayoutEffect } from "react";
import NavScrollExample from "./navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Bottomnav from "./bottomnav"; 
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

const picture = {
  name: "logo",
  url: "https://i.ibb.co/vDKwDhj/pexels-valeriia-miller-3547625-2.jpg",
  imageSize: 500,
};
function Demo() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  });
  return (
    <>
      <NavScrollExample />
      <div class="container">
      <Container
        fluid
        style={{
          maxWidth: "80%",
          marginLeft:'10%'
        }}
      >
        <Row md='14'> 
          <Col md="10">
            <Carousel>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://st.depositphotos.com/62628780/59569/i/450/depositphotos_595697878-stock-photo-let-brush-guide-you-still.jpg"
                  alt="First slide"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/premium-photo/painting-field-flowers-by-river_900321-13762.jpg"
                  alt="Second slide"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/Ykf7nnk/hqdefault.jpg"
                  alt="Second slide"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/9sjGwfL/331055227-Main-Image-001-l-2.jpg"
                  alt="Second slide"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://www.collettivovv.org/wp-content/uploads/2020/05/glass-painting-crafts.jpg"
                  alt="Second slide"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/RzJHqrK/Main-1.jpg"
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
              <Card.Img
                variant="top"
                src="https://i.ibb.co/vDKwDhj/pexels-valeriia-miller-3547625-2.jpg"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "60px",
                }}
              />
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
              <Card.Img
                variant="top"
                src="https://i.ibb.co/SyjjWm3/craft.jpg"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "65px",
                }}
              />
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
              <Card.Img
                variant="top"
                src="https://i.ibb.co/q0Yw0Ld/rr.jpg"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "60px",
                }}
              />
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
              <Card.Img
                variant="top"
                src="https://i.ibb.co/bJHqWPT/vibrant-watercolor-paintings-messy-desk-showcase-artist-creativity-generated-by-ai-24640-100488.jpg"
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "65px",
                }}
              />
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
          </div>
        </div>
      </div>
      <Bottomnav />
    </>
  );
}

export default Demo;
